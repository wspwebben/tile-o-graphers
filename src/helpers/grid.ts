import type { Grid } from "@/types";
import { CellType } from "@/types";

export const createEmptyGrid = (size: number): Grid<CellType> =>
  Array.from({ length: size }, () =>
    Array.from({ length: size }, () => CellType.Empty)
  );
