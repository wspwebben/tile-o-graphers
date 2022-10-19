<script setup lang="ts">
import { ref } from "vue";
import FieldCell from "./FieldCell.vue";
import { CellType, createEmptyGrid } from "./types";

const GRID_SIZE = 6;
const grid = ref(createEmptyGrid(GRID_SIZE));

// grid.value[2][0] = CellType.Water;
// grid.value[2][1] = CellType.Mountain;
// grid.value[2][2] = CellType.Monster;
// grid.value[2][3] = CellType.Village;
// grid.value[2][4] = CellType.Forest;
// grid.value[2][5] = CellType.Field;

function selectCell(x: number, y: number) {
  grid.value[y][x] = CellType.Monster
}
</script>

<template>
  <div class="wrapper">
    <div class="grid" :style="`--grid-size: ${GRID_SIZE}`">
      <div class="row" v-for="(row, y) in grid" :key="y">
        <div class="cell" v-for="(cell, x) in row" :key="x">
          <FieldCell :cell="cell" @click="selectCell(x, y)" />
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
