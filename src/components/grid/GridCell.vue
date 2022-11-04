<script setup lang="ts">
import { computed } from "vue";

import { CellType } from "../../types";
import { assertNever } from "../../helpers";

const props = defineProps<{
  cell: CellType;
}>();

const type = computed(() => {
  switch (props.cell) {
    case CellType.Empty:
      return "empty";
    case CellType.Mountain:
      return "mountain";
    case CellType.Forest:
      return "forest";
    case CellType.Village:
      return "village";
    case CellType.Field:
      return "field";
    case CellType.Water:
      return "water";
    case CellType.Monster:
      return "monster";
    default:
      assertNever(props.cell);
      return "";
  }
});
</script>

<template>
  <span
    class="grid-cell"
    :class="{
      [`grid-cell--${type}`]: true,
    }"
  />
</template>

<style lang="scss">
@use "../../assets/styles";

.grid-cell {
  display: block;
  aspect-ratio: 1 / 1;
  background-color: var(--grid-cell-color, transparent);
  border: 0;

  @each $terrain, $color in styles.$terrains-full {
    &--#{$terrain} {
      --grid-cell-color: #{$color};
    }
  }
}
</style>
