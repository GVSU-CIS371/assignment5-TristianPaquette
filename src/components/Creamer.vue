<<template>
  <div v-if="type !== 'No Cream'" class="froth">
    <div
      v-for="i in 5"
      :key="i"
      class="foam"
      :style="{ backgroundColor: foamColor }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBeverageStore } from "../stores/beverageStore";

const props = defineProps<{ type: string }>();
const store = useBeverageStore();

const foamColor = computed(() => {
  const item = store.creamers.find((c) => c.name === props.type);
  return item ? item.color : "#e4e0d2";
});
</script>

<style scoped lang="scss">
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  background-color: transparent;
  animation: pour-tea 2s 2s forwards;
}

.foam {
  display: block;
  background: #e4e0d2;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

.foam:nth-child(1) { top: 0px; left: -3px; }
.foam:nth-child(2) { top: 0px; left: 55px; }
.foam:nth-child(3) { top: 3px; left: 30px; width: 30px; height: 30px; }
.foam:nth-child(4) { top: 5px; right: -2px; width: 30px; height: 30px; }
.foam:nth-child(5) { top: 2px; right: 10px; }
</style>
