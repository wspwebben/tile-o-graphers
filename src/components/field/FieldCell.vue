<script setup lang="ts">
import { computed } from "vue";
import { CellType, CellState } from "./types";
import { assertNever } from "@/helpers";

const props = defineProps<{
  cell: CellType;
  state: CellState;
}>();

const emit = defineEmits<{
  (e: "click"): void;
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
    :class="{
      [`field-cell--${type}`]: true,
      [`field-cell--${stateClass}`]: true,
    }"
    type="button"
    @click="emit('click')"
  />
</template>

<style>
.field-cell {
  display: block;
  width: 50px;
  height: 50px;
  background-color: var(--field-cell-color, transparent);
  border: 0;
}

.field-cell--empty {
  --field-cell-color: #d3c2b2;
}

.field-cell--mountain {
  --field-cell-color: #6e4932;
}

.field-cell--forest {
  --field-cell-color: #1e8112;
}

.field-cell--village {
  --field-cell-color: #aa2012;
}

.field-cell--field {
  --field-cell-color: #bd7a2e;
}

.field-cell--water {
  --field-cell-color: #1b7bb8;
}

.field-cell--monster {
  --field-cell-color: #852d7f;
}

.field-cell--selected {
  opacity: 0.8;
}

.field-cell--error {
  --field-cell-color: #e51c1c;
}
</style>
