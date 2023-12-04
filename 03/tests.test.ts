import { describe, expect, it } from "vitest";
import {
  detectAdjacentSymbol,
  isNumeric,
  parser,
  returnNumbersAdjacentToSymbols,
  sumNumbersAdjacentToSymbols,
} from "./p1";
import fs from "fs";
import path from "path";
import { returnNumbersAdjacentToSymbolsP2, sumGearRatios } from "./p2";

describe("p1", () => {
  describe("examples provided", () => {
    const input = `467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..`;

    it("parses the example", () => {
      expect(parser(input)).toMatchInlineSnapshot(`
        [
          [
            "4",
            "6",
            "7",
            ".",
            ".",
            "1",
            "1",
            "4",
            ".",
            ".",
          ],
          [
            ".",
            ".",
            ".",
            "*",
            ".",
            ".",
            ".",
            ".",
            ".",
            ".",
          ],
          [
            ".",
            ".",
            "3",
            "5",
            ".",
            ".",
            "6",
            "3",
            "3",
            ".",
          ],
          [
            ".",
            ".",
            ".",
            ".",
            ".",
            ".",
            "#",
            ".",
            ".",
            ".",
          ],
          [
            "6",
            "1",
            "7",
            "*",
            ".",
            ".",
            ".",
            ".",
            ".",
            ".",
          ],
          [
            ".",
            ".",
            ".",
            ".",
            ".",
            "+",
            ".",
            "5",
            "8",
            ".",
          ],
          [
            ".",
            ".",
            "5",
            "9",
            "2",
            ".",
            ".",
            ".",
            ".",
            ".",
          ],
          [
            ".",
            ".",
            ".",
            ".",
            ".",
            ".",
            "7",
            "5",
            "5",
            ".",
          ],
          [
            ".",
            ".",
            ".",
            "$",
            ".",
            "*",
            ".",
            ".",
            ".",
            ".",
          ],
          [
            ".",
            "6",
            "6",
            "4",
            ".",
            "5",
            "9",
            "8",
            ".",
            ".",
          ],
        ]
      `);
    });
  });

  describe("detectAdjacentSymbol", () => {
    it("returns true if co-ordinates has an adjacent symbol", () => {
      const input = `9...
        *...
        7...`;

      const parsedInput = parser(input);

      expect(detectAdjacentSymbol(0, 0, parsedInput)).toEqual(true);
      expect(detectAdjacentSymbol(0, 2, parsedInput)).toEqual(true);
      expect(detectAdjacentSymbol(2, 3, parsedInput)).toEqual(false);
    });

    it("works for obscure symbols", () => {
      const input = `9...
          -...
          7...`;

      const parsedInput = parser(input);

      expect(detectAdjacentSymbol(0, 0, parsedInput)).toEqual(true);
      expect(detectAdjacentSymbol(0, 2, parsedInput)).toEqual(true);
      expect(detectAdjacentSymbol(2, 3, parsedInput)).toEqual(false);
    });
  });

  describe("returnNumbersAdjacentToSymbols", () => {
    const input = `99...
    .*..8
    ....*
    7.5..
    ..*.9
    `;
    it("returns all numbers where one digit is adjacent to a symbol", () => {
      const grid = parser(input);
      const result = returnNumbersAdjacentToSymbols(grid);
      expect(result).toEqual([99, 8, 5]);
    });

    it("works on another test case", () => {
      const input = `........
        .24..4..
        ......*.`;
      const grid = parser(input);
      const test = detectAdjacentSymbol(5, 1, grid);
      expect(grid[1][5]).toEqual("4");
      expect(test).toEqual(true);
      const result = returnNumbersAdjacentToSymbols(grid);
      expect(result).toEqual([4]);
    });

    it("works on the real input data", () => {
      expect(isNumeric("-")).toBe(false);
      expect(isNumeric("&")).toBe(false);
      // prettier-ignore
      const input = 
        `........440...............418..643.....438......740.261......................................727...........................870..............
         ...............338.............-........*.......*.......34&.$........@.....&742................................353..26.......*...188...238..`;

      const grid = parser(input);
      const result = returnNumbersAdjacentToSymbols(grid);
      expect(result).toEqual([643, 438, 740, 870, 34, 742]);
    });
  });

  describe("sumNumbersAdjacentToSymbols", () => {
    const input = `99...
      .*..8
      ....*
      7.5..
      ..*.9
      `;
    it("calculates the correct sum", () => {
      const grid = parser(input);
      const result = sumNumbersAdjacentToSymbols(grid);
      expect(result).toEqual(99 + 8 + 5);
    });
  });

  describe("part 1 awnser", () => {
    it("returns a number", () => {
      const raw = fs
        .readFileSync(path.join(__dirname, "input.data.txt"))
        .toString();
      const grid = parser(raw);
      const result = sumNumbersAdjacentToSymbols(grid);
      console.log("P1 anwser is:", result);
      expect(result).toEqual(532331);
    });
  });
});

describe("p2", () => {
  describe("provided example", () => {
    it("returns the expected count", () => {
      // prettier-ignore
      const input = 
        `467..114..
        ...*......
        ..35..633.
        ......#...
        617*......
        .....+.58.
        ..592.....
        ......755.
        ...$.*....
        .664.598..`
      const grid = parser(input);
      const result = sumGearRatios(grid);

      expect(result).toEqual(467835);
    });
  });

  describe("problem input", () => {
    it("calcuates the gear ratio from the problem input", () => {
      const raw = fs
        .readFileSync(path.join(__dirname, "input.data.txt"))
        .toString();
      const grid = parser(raw);

      const result = sumGearRatios(grid);
      console.log("P2 awnser is", result);
      expect(result).toEqual(82301120);
    });
  });
});
