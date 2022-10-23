type Offset = [dx: number, dy: number];

export type Shape = Offset[];

export const initialShape: Shape = [
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
];

export function rotate(shape: Shape): Shape {
  return shape.map(([dx, dy]) => [-dy, dx]);
}
