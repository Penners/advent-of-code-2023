import { Game } from "./utils";

export const calculateMinCubes = (game: Game) => {
  const minCubes: Record<string, number> = {};
  game.rounds.forEach((round) => {
    Object.entries(round).forEach(([color, value]) => {
      if (!minCubes[color]) {
        return (minCubes[color] = value);
      }
      if (value > minCubes[color]) {
        return (minCubes[color] = value);
      }
    });
  });
  return minCubes;
};

export const calcuateMinCubesPower = (minPowers: Record<string, number>) => {
  return Object.values(minPowers).reduce((prev, current) => prev * current, 1);
};
