import type { Grid } from "@/types";
import { CellType } from "@/types";

export const createEmptyGrid = (size: number): Grid =>
  Array.from({ length: size }, () =>
    Array.from({ length: size }, () => CellType.Empty)
  );
