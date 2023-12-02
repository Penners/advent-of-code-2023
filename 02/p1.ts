import { Game } from "./utils";

export const isGameValid = (game: Game, constrants: Record<string, number>) => {
  const isValid = game.rounds.every((round) => {
    return Object.entries(round).every(([color, value]) => {
      return constrants[color] >= value;
    });
  });
  return isValid;
};
