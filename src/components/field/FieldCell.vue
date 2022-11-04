<script setup lang="ts">
import { computed } from "vue";

import GridCell from "../grid/GridCell.vue";

import { CellType, CellState } from "../../types";
import { assertNever } from "../../helpers";

const props = defineProps<{
  cell: CellType;
  state: CellState;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const stateClass = computed(() => {
  switch (props.state) {
    case CellState.Idle:
      return "idle";
    case CellState.Selected:
      return "selected";
    case CellState.SelectedError:
      return "error";
    default:
      assertNever(props.state);
      return "";
  }
});
</script>

<template>
  <button
    class="field-cell"
    :class="`field-cell--${stateClass}`"
    type="button"
    @click="emit('click')"
  >
    <GridCell class="field-cell__cell" :cell="cell" />
  </button>
</template>

<style lang="scss">
.field-cell {
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: var(--field-cell-color, transparent);
  border: 0;

  &__cell {
    position: absolute;
    inset: 0;
  }

  &:focus {
    outline: 0;
  }

  &--selected {
    opacity: 0.8;
  }

  &--error {
    background-color: #e51c1c;

    > * {
      opacity: 0;
    }
  }
}
</style>
