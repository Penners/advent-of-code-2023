export const parseInput = (text: string) => {
  const data = text.split("\n").map((line) => {
    return parseGame(line);
  });
  return data;
};

export const parseGame = (line: string) => {
  const [gameInfo, rounds] = line.split(":");
  const [_, ID] = gameInfo.split(" ");
  return {
    ID: parseInt(ID),
    rounds: rounds.split(";").map((round) => {
      const values: Record<string, number> = {};
      round.split(",").forEach((color) => {
        const [value, key] = color.trim().split(" ");
        values[key] = parseInt(value);
      });
      return values;
    }),
  };
};

export type Game = ReturnType<typeof parseGame>;
