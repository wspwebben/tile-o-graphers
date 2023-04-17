export enum CellType {
  Empty = "empty",
  Mountain = "mountain",
  Forest = "forest",
  Village = "village",
  Field = "field",
  Water = "water",
  Monster = "monster",
}

export type PlayableCellType =
  | CellType.Forest
  | CellType.Village
  | CellType.Field
  | CellType.Water
  | CellType.Monster;

export enum CellState {
  Idle,
  Selected,
  SelectedError,
}

export type Grid = CellType[][];
