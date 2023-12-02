import { describe, expect, it } from "vitest";
import { isGameValid } from "./p1";
import { parseGame, parseInput } from "./utils";
import fs from "fs";
import path from "path";
import { calcuateMinCubesPower, calculateMinCubes } from "./p2";

describe("p1", () => {
  describe("if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?", () => {
    const constraints = {
      red: 12,
      green: 13,
      blue: 14,
    };
    it("Game 1 is valid", () => {
      const game = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      expect(isGameValid(parseGame(game), constraints)).toEqual(true);
    });

    it("Game 2 is valid", () => {
      const game =
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
      expect(isGameValid(parseGame(game), constraints)).toEqual(true);
    });

    it("Game 3 is invalid", () => {
      const game =
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
      expect(isGameValid(parseGame(game), constraints)).toEqual(false);
    });

    it("Game 4 is invalid", () => {
      const game =
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red";
      expect(isGameValid(parseGame(game), constraints)).toEqual(false);
    });

    it("Game 5 is valid", () => {
      const game = "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
      expect(isGameValid(parseGame(game), constraints)).toEqual(true);
    });
  });

  describe("Sum of the total valid games for the following constraints", () => {
    it("should produce be 2265", () => {
      const constraints = {
        red: 12,
        green: 13,
        blue: 14,
      };

      const parsedGames = parseInput(
        fs.readFileSync(path.join(__dirname, "data.sample.txt")).toString()
      );

      const sumOfValidGames = parsedGames.reduce((current, game, index) => {
        if (isGameValid(game, constraints)) {
          return current + game.ID;
        }
        return current;
      }, 0);

      console.log(`P1 awnser is :${sumOfValidGames}`);
      expect(sumOfValidGames).toEqual(2265);
    });
  });
});

describe("p2", () => {
  describe("Sample data", () => {
    it("Game 1 sample", () => {
      const game = parseGame(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
      );
      const result = calculateMinCubes(game);
      expect(result).toEqual({
        red: 4,
        green: 2,
        blue: 6,
      });
      expect(calcuateMinCubesPower(result)).toEqual(48);
    });

    it("Game 2 sample", () => {
      const game = parseGame(
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"
      );
      const result = calculateMinCubes(game);
      expect(result).toEqual({
        red: 1,
        green: 3,
        blue: 4,
      });
      expect(calcuateMinCubesPower(result)).toEqual(12);
    });

    it("Game 3 sample", () => {
      const game = parseGame(
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
      );
      const result = calculateMinCubes(game);
      expect(result).toEqual({
        red: 20,
        green: 13,
        blue: 6,
      });
      expect(calcuateMinCubesPower(result)).toEqual(1560);
    });

    it("Game 4 sample", () => {
      const game = parseGame(
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"
      );
      const result = calculateMinCubes(game);
      expect(result).toEqual({
        red: 14,
        green: 3,
        blue: 15,
      });
      expect(calcuateMinCubesPower(result)).toEqual(630);
    });

    it("Game 5 sample", () => {
      const game = parseGame(
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
      );
      const result = calculateMinCubes(game);
      expect(result).toEqual({
        red: 6,
        green: 3,
        blue: 2,
      });
      expect(calcuateMinCubesPower(result)).toEqual(36);
    });
  });

  describe("sum of the powers", () => {
    it("calculates the sum of the power of the mininum cubes for each game", () => {
      const parsedGames = parseInput(
        fs.readFileSync(path.join(__dirname, "data.sample.txt")).toString()
      );

      const sumOfPowers = parsedGames.reduce((prev, game) => {
        const result = calculateMinCubes(game);
        const power = calcuateMinCubesPower(result);
        return prev + power;
      }, 0);

      console.log(`P2 the answer is: ${sumOfPowers}`);
      expect(sumOfPowers).toEqual(64097);
    });
  });
});
