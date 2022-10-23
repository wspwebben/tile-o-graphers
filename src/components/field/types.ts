type Offset = [dx: number, dy: number];

export type Shape = Offset[];

export enum CellType {
  Empty,
  Mountain,
  MountainEmpty,
  Forest,
  Village,
  Field,
  Water,
  Monster,
}

export type PlayableCellType =
  | CellType.Empty
  | CellType.Forest
  | CellType.Village
  | CellType.Field
  | CellType.Water
  | CellType.Monster;

export interface ResearchCard {
  type: PlayableCellType;
  shape: Shape;
}

export enum CellState {
  Idle,
  Selected,
  SelectedError,
}

type Grid<Cell extends number> = Cell[][];

export const createEmptyGrid = (size: number): Grid<CellType> =>
  Array.from({ length: size }, () =>
    Array.from({ length: size }, () => CellType.Empty)
  );
