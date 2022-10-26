export enum CellType {
  Empty,
  Mountain,
  Forest,
  Village,
  Field,
  Water,
  Monster,
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

export type Grid<Cell extends number> = Cell[][];
