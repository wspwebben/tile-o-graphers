<script setup lang="ts">
import CardTime from "./CardTime.vue";
import GridCell from "../grid/GridCell.vue";

import type { ExploreCard } from "@/types";

const props = defineProps<{
  card: ExploreCard;
}>();
</script>

<template>
  <article class="CardExplore">
    <CardTime
      class="CardExplore__time"
      :terrains="card.terrainOptions"
      :time="card.time"
    />

    <div class="CardExplore__info">
      <h2 class="CardExplore__title">{{ card.title }}</h2>
      <ul class="CardExplore__list">
        <li
          class="CardExplore__item"
          v-for="(terrain, index) in card.terrainOptions"
          :key="index"
        >
          <GridCell class="CardExplore__terrain" :cell="terrain" />
        </li>
      </ul>
      <ul class="CardExplore__list">
        <li
          class="CardExplore__item"
          :class="hasBonus || 'CardExplore__item--bonus'"
          v-for="({ hasBonus }, index) in card.shapeOptions"
          :key="index"
        >
          <span v-if="hasBonus" class="CardExplore__bonus" />
        </li>
      </ul>
      <span class="CardExplore__type">Explore</span>
    </div>
  </article>
</template>

<style lang="scss">
.CardExplore {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 220px;
  min-height: 260px;
  background-color: #888;
  border: 1px solid #000;
  border-radius: 10px;
  color: #fff;

  &__info {
    position: relative;
    margin-top: auto;
    padding: 1em 0;
    background-color: #2d1f11;
  }

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    text-align: center;
    transform: translateY(-50%);
  }

  &__bonus {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(235, 225, 50);
    box-shadow: 0px 0px 3px 3px rgb(0 0 0 / 30%);
  }

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 1em 0.5em;
    border-right: 1px solid #000;
  }

  &__item:last-child {
    border-right: 0;
  }

  &__terrain {
    width: 30px;
  }

  &__type {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(50%);
  }
}
</style>
