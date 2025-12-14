import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";

import { db, auth, googleProvider } from "../firebase";

interface Ingredient {
  id: string;
  name: string;
  color: string;
}

interface Beverage {
  id?: string;
  uid?: string;
  name: string;
  temp: string;
  base: Ingredient;
  creamer: Ingredient;
  syrup: Ingredient;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: ["Hot", "Cold"],

    bases: [] as Ingredient[],
    creamers: [] as Ingredient[],
    syrups: [] as Ingredient[],

    currentTemp: "Hot",
    currentBase: null as Ingredient | null,
    currentCreamer: null as Ingredient | null,
    currentSyrup: null as Ingredient | null,

    beverages: [] as Beverage[],
    currentBeverage: null as Beverage | null,

    beverageName: "",
    user: null as User | null,
    message: "",

    beveragesUnsubscribe: null as null | (() => void),
  }),

  actions: {
    // Load ingredient data
    async init() {
      const baseSnap = await getDocs(collection(db, "bases"));
      this.bases = baseSnap.docs.map((d) => d.data() as Ingredient);

      const creamerSnap = await getDocs(collection(db, "creamers"));
      this.creamers = creamerSnap.docs.map((d) => d.data() as Ingredient);

      const syrupSnap = await getDocs(collection(db, "syrups"));
      this.syrups = syrupSnap.docs.map((d) => d.data() as Ingredient);

      // defaults
      this.currentBase = this.bases[0] || null;
      this.currentCreamer = this.creamers[0] || null;
      this.currentSyrup = this.syrups[0] || null;

      // Authentication listener
      onAuthStateChanged(auth, (user) => {
        this.setUser(user);
      });
    },

    // Set logged-in user and listen to that user’s beverages
    setUser(user: User | null) {
      this.user = user;

      // stop old listener
      if (this.beveragesUnsubscribe) {
        this.beveragesUnsubscribe();
        this.beveragesUnsubscribe = null;
      }

      if (!user) {
        this.beverages = [];
        this.currentBeverage = null;
        return;
      }

      const q = collection(db, "users", user.uid, "beverages");

      this.beveragesUnsubscribe = onSnapshot(q, (snap) => {
        this.beverages = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Beverage),
        }));
      });

    },

    // Google Sign-In
    async withGoogle() {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (err) {
        this.message = "Login failed.";
      }
    },

    // Google Sign-Out
    async signOut() {
      await signOut(auth);
      this.user = null;
      this.beverages = [];
      this.currentBeverage = null;
    },

    // Create beverage
    async makeBeverage() {
      if (!this.user) {
        this.message = "Please sign in first.";
        return;
      }

      if (
        !this.beverageName.trim() ||
        !this.currentBase ||
        !this.currentCreamer ||
        !this.currentSyrup
      ) {
        this.message = "Please complete all fields.";
        return;
      }

      const newBev = {
        uid: this.user.uid,
        name: this.beverageName.trim(),
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      await addDoc(
        collection(db, "users", this.user.uid, "beverages"),
        newBev
      );

      this.beverageName = "";
      this.message = "Beverage created!";
    },

    showBeverage(b: Beverage) {
      this.currentBeverage = b;
      this.currentTemp = b.temp;
      this.currentBase = b.base;
      this.currentCreamer = b.creamer;
      this.currentSyrup = b.syrup;
    },
  },
});
