<script setup lang="ts">
import { ref, computed } from "vue";
import { useMagicKeys, whenever } from "@vueuse/core";

import FieldCell from "./FieldCell.vue";
import type { PlayableCellType, ExploreCard } from "../../types";
import { CellType, CellState } from "../../types";
import { createEmptyGrid, rotate, mirror } from "../../helpers";
import { cards } from "../../assets/cards";

type Cell = {
  x: number;
  y: number;
};

const OUT_OF_BOUNDS: Cell = {
  x: -1,
  y: -1,
};

function compareCells(a: Cell, b: Cell) {
  return a.x === b.x && a.y === b.y;
}

const compareCellWith = (a: Cell) => (b: Cell) => compareCells(a, b);

const GRID_SIZE = 6;

const grid = ref(createEmptyGrid(GRID_SIZE));
const position = ref<Cell>(OUT_OF_BOUNDS);
const card = ref<ExploreCard>(cards[0]);

const selection = computed(() => {
  const terrains = card.value.terrainOptions;
  const shapes = card.value.shapeOptions;

  return {
    terrain: terrains[0],
    shape: shapes[0].shape,
  };
});

const { r, m } = useMagicKeys();

whenever(r, () => {
  selection.value.shape = rotate(selection.value.shape);
});

whenever(m, () => {
  selection.value.shape = mirror(selection.value.shape);
});

const selectedCells = computed<Cell[]>(() => {
  return selection.value.shape.map(([dx, dy]) => {
    return {
      x: position.value.x + dx,
      y: position.value.y + dy,
    };
  });
});

function getCellValue({ x, y }: Cell) {
  return grid.value[y][x];
}

function setCellValue({ x, y }: Cell, value: PlayableCellType) {
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
    setCellValue(cell, selection.value.terrain);
  }

  card.value = cards.pop();
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
  if (position.value === OUT_OF_BOUNDS) {
    return CellState.Idle;
  }

  const isSelected = selectedCells.value.some(compareCellWith(cell));

  if (!isSelected) return CellState.Idle;

  if (canFillSelectedCells.value === false) {
    return CellState.SelectedError;
  }

  return CellState.Selected;
}

function clearHover() {
  position.value = OUT_OF_BOUNDS;
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
            @mouseleave="clearHover"
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
