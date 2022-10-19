export enum CellType {
  Empty,
  Mountain,
  Forest,
  Village,
  Field,
  Water,
  Monster,
}

type Grid<Cell extends number> = Cell[][];

export const createEmptyGrid = (size: number): Grid<CellType> =>
  Array.from({ length: size }, () =>
    Array.from({ length: size }, () => CellType.Empty)
  );
