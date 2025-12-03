<template>
  <div>
    <Beverage
      :isIced="store.currentTemp === 'Cold'"
      :base="store.currentBase?.name || ''"
      :creamer="store.currentCreamer?.name || ''"
      :syrup="store.currentSyrup?.name || ''"
    />

    <!-- Temperature -->
    <ul>
      <li>
        <template v-for="temp in store.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temp"
              :value="temp"
              v-model="store.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Bases -->
    <ul class="options-row">
      <li v-for="b in store.bases" :key="b.id">
        <label>
          <input type="radio" name="base" :value="b" v-model="store.currentBase" />
          {{ b.name }}
        </label>
      </li>
    </ul>

    <!-- Creamers -->
    <ul class="options-row">
      <li v-for="c in store.creamers" :key="c.id">
        <label>
          <input type="radio" name="creamer" :value="c" v-model="store.currentCreamer" />
          {{ c.name }}
        </label>
      </li>
    </ul>

    <!-- Syrups -->
    <ul class="options-row">
      <li v-for="s in store.syrups" :key="s.id">
        <label>
          <input type="radio" name="syrup" :value="s" v-model="store.currentSyrup" />
          {{ s.name }}
        </label>
      </li>
    </ul>

    <!-- login -->
    <div style="margin: 1rem 0">
      <button v-if="!store.user" @click="store.withGoogle()">
        Sign in with Google
      </button>

      <div v-else>
        <p>Signed in as: <strong>{{ store.user.email }}</strong></p>
        <button @click="store.signOut()">Sign Out</button>
      </div>
    </div>

    <!-- make beverage -->
    <input
      type="text"
      placeholder="Beverage Name"
      v-model="store.beverageName"
      :disabled="!store.user"
    />

    <button @click="store.makeBeverage()" :disabled="!store.user">
      🍺 Make Beverage
    </button>

    <!-- Saved Beverages -->
    <div id="beverage-container" v-if="store.user" style="margin-top:20px">
      <h3>Your Saved Beverages</h3>
      <ul>
        <li v-for="bev in store.beverages" :key="bev.id">
          <label>
            <input
              type="radio"
              name="saved-bevs"
              @change="store.showBeverage(bev)"
            />
            {{ bev.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { onMounted } from "vue";

const store = useBeverageStore();
onMounted(() => {
  store.init();
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.options-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 0.5rem 0;
}
</style>
