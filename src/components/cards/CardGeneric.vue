<script setup lang="ts">
// import { computed } from "vue";


const props = defineProps<{
  cell: CellType;
  state: CellState;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

</script>

<template>
  <div></div>
</template>

<style>
</style>
