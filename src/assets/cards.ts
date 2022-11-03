import type { RuinsCard, AmbushCard, ResearchCard } from "../types";
import { CardType, CellType, Direction, Corner } from "../types";

// Ruins
const ruins1: RuinsCard = {
  type: CardType.Ruins,
  title: "Temple Ruins",
};

const ruins2: RuinsCard = {
  type: CardType.Ruins,
  title: "Outpost Ruins",
};

// Research
// Basic
const card1: ResearchCard = {
  type: CardType.Research,
  title: "Great River",
  time: 1,
  terrainOptions: [CellType.Water],
  shapeOptions: [
    {
      hasBonus: true,
      shape: [
        [0, -1],
        [0, 0],
        [0, 1],
      ],
    },
    {
      hasBonus: false,
      shape: [
        [1, -1],
        [1, 0],
        [0, 0],
        [0, 1],
        [-1, 1],
      ],
    },
  ],
};

const card2: ResearchCard = {
  type: CardType.Research,
  title: "Farmland",
  time: 1,
  terrainOptions: [CellType.Field],
  shapeOptions: [
    {
      hasBonus: true,
      shape: [
        [0, 0],
        [0, 1],
      ],
    },
    {
      hasBonus: false,
      shape: [
        [0, -1],
        [-1, 0],
        [0, 0],
        [0, 1],
        [0, 1],
      ],
    },
  ],
};

const card3: ResearchCard = {
  type: CardType.Research,
  title: "Hamlet",
  time: 1,
  terrainOptions: [CellType.Village],
  shapeOptions: [
    {
      hasBonus: true,
      shape: [
        [0, -1],
        [0, 0],
        [1, 0],
      ],
    },
    {
      hasBonus: false,
      shape: [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
      ],
    },
  ],
};

const card4: ResearchCard = {
  type: CardType.Research,
  title: "Forgotten Forest",
  time: 1,
  terrainOptions: [CellType.Forest],
  shapeOptions: [
    {
      hasBonus: true,
      shape: [
        [0, 0],
        [1, 1],
      ],
    },
    {
      hasBonus: false,
      shape: [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
      ],
    },
  ],
};

// Advanced

const card5: ResearchCard = {
  type: CardType.Research,
  title: "Hinterland Stream",
  time: 2,
  terrainOptions: [CellType.Field, CellType.Water],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
      ],
    },
  ],
};

const card6: ResearchCard = {
  type: CardType.Research,
  title: "Treetop Village",
  time: 2,
  terrainOptions: [CellType.Forest, CellType.Village],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, -1],
        [3, -1],
      ],
    },
  ],
};

const card7: ResearchCard = {
  type: CardType.Research,
  title: "Marshlands",
  time: 2,
  terrainOptions: [CellType.Forest, CellType.Water],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [
        [0, -1],
        [0, 0],
        [0, 1],
        [1, 0],
        [2, 0],
      ],
    },
  ],
};

const card8: ResearchCard = {
  type: CardType.Research,
  title: "Fishing Village",
  time: 2,
  terrainOptions: [CellType.Village, CellType.Water],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [
        [-2, 0],
        [-1, 0],
        [0, 0],
        [1, 0],
        [2, 0],
      ],
    },
  ],
};

const card9: ResearchCard = {
  type: CardType.Research,
  title: "Orchad",
  time: 2,
  terrainOptions: [CellType.Forest, CellType.Field],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
      ],
    },
  ],
};

const card10: ResearchCard = {
  type: CardType.Research,
  title: "Homestad",
  time: 2,
  terrainOptions: [CellType.Village, CellType.Field],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [
        [0, -1],
        [0, 0],
        [0, 1],
        [1, 0],
      ],
    },
  ],
};

const card11: ResearchCard = {
  type: CardType.Research,
  title: "Rift Lands",
  time: 0,
  terrainOptions: [
    CellType.Forest,
    CellType.Village,
    CellType.Field,
    CellType.Water,
    CellType.Monster,
  ],
  shapeOptions: [
    {
      hasBonus: false,
      shape: [[0, 0]],
    },
  ],
};

// Ambush
// Basic
const ambush1: AmbushCard = {
  type: CardType.Ambush,
  title: "Goblin Attack",
  direction: Direction.CounterClockwise,
  corner: Corner.SouthEast,
  shape: [
    [-1, -1],
    [0, 0],
    [1, 1],
  ],
};

const ambush2: AmbushCard = {
  type: CardType.Ambush,
  title: "Bugbear Assault",
  direction: Direction.Clockwise,
  corner: Corner.NorthEast,
  shape: [
    [0, 0],
    [0, 1],
    [2, 0],
    [2, 1],
  ],
};

const ambush3: AmbushCard = {
  type: CardType.Ambush,
  title: "Kobold Onslaught",
  direction: Direction.Clockwise,
  corner: Corner.SouthWest,
  shape: [
    [0, -1],
    [0, 0],
    [0, 1],
    [1, 0],
  ],
};

const ambush4: AmbushCard = {
  type: CardType.Ambush,
  title: "Gnoll Raid",
  direction: Direction.CounterClockwise,
  corner: Corner.NorthWest,
  shape: [
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
};

// Expansion
const ambush5: AmbushCard = {
  type: CardType.Ambush,
  title: "Ogre Charge",
  direction: Direction.CounterClockwise,
  corner: Corner.SouthWest,
  shape: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
};

const ambush6: AmbushCard = {
  type: CardType.Ambush,
  title: "Ratman Strike",
  direction: Direction.Clockwise,
  corner: Corner.NorthEast,
  shape: [
    [-1, 0],
    [0, 0],
    [1, 0],
  ],
};

const ambush7: AmbushCard = {
  type: CardType.Ambush,
  title: "Insectoid Invasion",
  direction: Direction.Clockwise,
  corner: Corner.NorthWest,
  shape: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, -1],
  ],
};

const ambush8: AmbushCard = {
  type: CardType.Ambush,
  title: "Flayer Incursion",
  direction: Direction.CounterClockwise,
  corner: Corner.NorthEast,
  shape: [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
};

export const cards = [
  //   ruins1,
  //   ruins2,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
];

export const ambushes = [
  ambush1,
  ambush2,
  ambush3,
  ambush4,
  ambush5,
  ambush6,
  ambush7,
  ambush8,
];
