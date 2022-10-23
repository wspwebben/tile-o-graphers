import type { Shape } from "./types";

export function rotate(shape: Shape): Shape {
  return shape.map(([dx, dy]) => [-dy, dx]);
}

export function mirror(shape: Shape): Shape {
  return shape.map(([dx, dy]) => [-dx, dy]);
}
