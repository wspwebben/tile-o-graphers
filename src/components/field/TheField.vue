<script setup lang="ts">
import { ref, computed } from "vue";
import FieldCell from "./FieldCell.vue";
import { CellType, CellState, createEmptyGrid } from "./types";

const GRID_SIZE = 6;
const grid = ref(createEmptyGrid(GRID_SIZE));
const shape = [
  [0, 0],
  [0, 1],
  [1, 0],
  [2, 0],
];

type Cell = {
  x: number;
  y: number;
};

const position = ref<Cell>({
  x: 0,
  y: 0,
});

const currentTile = ref<CellType>(CellType.Monster);

const selectedCells = computed<Cell[]>(() => {
  return shape.map(([dx, dy]) => {
    return {
      x: position.value.x + dx,
      y: position.value.y + dy,
    };
  });
});

function getCellValue({ x, y }: Cell) {
  return grid.value[y][x];
}

function setCellValue({ x, y }: Cell, value: CellType) {
  grid.value[y][x] = value;
}

function trackHoveredCell(cell: Cell) {
  position.value = cell;
}

function fillSelectedCells() {
  if (canFillSelectedCells.value === false) {
    return;
  }

  for (const cell of selectedCells.value) {
    setCellValue(cell, currentTile.value);
  }
}

const canFillSelectedCells = computed(() => {
  return selectedCells.value.every((cell) => {
    if (cell.x < 0 || cell.y < 0) return false;
    if (cell.x >= GRID_SIZE || cell.y >= GRID_SIZE) return false;
    if (getCellValue(cell) !== CellType.Empty) return false;

    return true;
  });
});

function getCellState(cell: Cell) {
  const isSelected = selectedCells.value.some(
    ({ x, y }) => cell.x == x && cell.y == y
  );

  if (!isSelected) return CellState.Idle;

  if (canFillSelectedCells.value === false) {
    return CellState.SelectedError;
  }

  return CellState.Selected;
}
</script>

<template>
  <div class="wrapper">
    <div
      class="grid"
      :style="`--grid-size: ${GRID_SIZE}`"
      @click="fillSelectedCells"
    >
      <div class="row" v-for="(row, y) in grid" :key="y">
        <div class="cell" v-for="(cell, x) in row" :key="x">
          <FieldCell
            :cell="cell"
            :state="getCellState({ x, y })"
            @mouseenter="trackHoveredCell({ x, y })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  padding: 20px;
}

.grid {
  --grid-gap: 1px;

  display: grid;
  grid-template-rows: repeat(var(--grid-size), min-content);
  gap: var(--grid-gap);
  background-color: #000;
  padding: var(--grid-gap);
}

.row {
  display: grid;
  grid-template-columns: repeat(var(--grid-size), min-content);
  gap: var(--grid-gap);
}
</style>
