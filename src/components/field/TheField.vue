<script setup lang="ts">
import { ref, computed } from "vue";
import FieldCell from "./FieldCell.vue";
import { CellType, createEmptyGrid } from "./types";

const GRID_SIZE = 6;
const grid = ref(createEmptyGrid(GRID_SIZE));
const shape = [
  [0, 0],
  [0, 1],
  [1, 0],
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

function isHovered(x: number, y: number) {
  return selectedCells.value.some((cell) => cell.x == x && cell.y == y);
}

function trackHoveredCell(cell: Cell) {
  position.value = cell;
}

function fillSelectedCells() {
  for (const { x, y } of selectedCells.value) {
    grid.value[y][x] = currentTile.value;
  }
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
            :hovered="isHovered(x, y)"
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
  grid-template-columns: repeat(var(--grid-size), min-content);
  gap: var(--grid-gap);
  background-color: #000;
  padding: var(--grid-gap);
}

.row {
  display: grid;
  grid-template-rows: repeat(var(--grid-size), min-content);
  gap: var(--grid-gap);
}
</style>
