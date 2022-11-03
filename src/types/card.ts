import type { Shape } from "./shape";
import type { PlayableCellType } from "./grid";

export enum CardType {
  Ruins = "ruins",
  Ambush = "ambush",
  Research = "research",
}

interface BaseCard {
  type: CardType;
  title: string;
  image?: string;
}

export interface RuinsCard extends BaseCard {
  type: CardType.Ruins;
}

// Ambush

export enum Direction {
  Clockwise = "CW",
  CounterClockwise = "CCW",
}

export enum Corner {
  NorthWest = "NW",
  NorthEast = "NE",
  SouthWest = "SW",
  SouthEast = "SE",
}

export interface AmbushCard extends BaseCard {
  type: CardType.Ambush;
  shape: Shape;
  direction: Direction;
  corner: Corner;
}

// Research

export interface ShapeOption {
  hasBonus: boolean;
  shape: Shape;
}

export interface ResearchCard extends BaseCard {
  type: CardType.Research;
  time: number;
  terrainOptions: PlayableCellType[];
  shapeOptions: ShapeOption[];
}

export type Card = RuinsCard | ResearchCard | AmbushCard
