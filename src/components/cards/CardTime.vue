<script setup lang="ts">
import { computed } from "vue";

import type { PlayableCellType } from "@/types";

const props = defineProps<{
  terrains: PlayableCellType[];
  time: number;
}>();

const classes = computed(() => {
  if (props.terrains.length <= 2) {
    return props.terrains.map(
      (terrain, index) => `CardTime--${index + 1}-${terrain}`
    );
  }

  return "";
});
</script>

<template>
  <span class="CardTime" :class="classes">
    <span class="CardTime__value">{{ props.time }}</span>
  </span>
</template>

<style lang="scss">
@use "../../assets/styles";

.CardTime {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 20px;
  height: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  overflow: hidden;

  &::before,
  &::after {
    flex-basis: 50%;
    flex-grow: 1;
  }

  @each $terrain, $color in styles.$terrains {
    &--1-#{$terrain} {
      &::before {
        background-color: $color;
        content: "";
      }
    }

    &--2-#{$terrain} {
      &::after {
        background-color: $color;
        content: "";
      }
    }
  }

  &__value {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
}
</style>
