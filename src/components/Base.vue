<template>
  <div class="baseBeverage" :style="{ backgroundColor: baseColor }"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBeverageStore } from "../stores/beverageStore";

const props = defineProps<{ type: string }>();
const store = useBeverageStore();

const baseColor = computed(() => {
  const item = store.bases.find((b) => b.name === props.type);
  return item ? item.color : "#6F4E37";
});
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
}
</style>
