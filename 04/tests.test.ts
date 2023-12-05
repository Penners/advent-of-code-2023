import { describe, expect, it } from "vitest";
import { calculateTotalWinnings, parseInput } from "./p1";
import fs from "fs";
import path from "path";
import { calculateReaminingCards } from "./p2";

describe("p1", () => {
  describe("example input", () => {
    const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
        Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
        Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
        Card  5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
        Card   6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
        Card 101: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

    it("should parse", () => {
      const output = parseInput(input);
      expect(output).toMatchInlineSnapshot(`
        [
          [
            [
              41,
              48,
              83,
              86,
              17,
            ],
            Set {
              83,
              86,
              6,
              31,
              17,
              9,
              48,
              53,
            },
            "1",
          ],
          [
            [
              13,
              32,
              20,
              16,
              61,
            ],
            Set {
              61,
              30,
              68,
              82,
              17,
              32,
              24,
              19,
            },
            "2",
          ],
          [
            [
              1,
              21,
              53,
              59,
              44,
            ],
            Set {
              69,
              82,
              63,
              72,
              16,
              21,
              14,
              1,
            },
            "3",
          ],
          [
            [
              41,
              92,
              73,
              84,
              69,
            ],
            Set {
              59,
              84,
              76,
              51,
              58,
              5,
              54,
              83,
            },
            "4",
          ],
          [
            [
              87,
              83,
              26,
              28,
              32,
            ],
            Set {
              88,
              30,
              70,
              12,
              93,
              22,
              82,
              36,
            },
            "5",
          ],
          [
            [
              31,
              18,
              13,
              56,
              72,
            ],
            Set {
              74,
              77,
              10,
              23,
              35,
              67,
              36,
              11,
            },
            "6",
          ],
          [
            [
              31,
              18,
              13,
              56,
              72,
            ],
            Set {
              74,
              77,
              10,
              23,
              35,
              67,
              36,
              11,
            },
            "101",
          ],
        ]
      `);
    });

    it("should total 13", () => {
      const data = parseInput(input);
      const result = calculateTotalWinnings(data);
      expect(result).toBe(13);
    });
  });

  describe("real input", () => {
    it("should return a number", () => {
      const raw = fs
        .readFileSync(path.join(__dirname, "input.data.txt"))
        .toString();

      const data = parseInput(raw);
      const result = calculateTotalWinnings(data);
      console.log("p1 answer is", result);
      expect(result).toBe(24160);
    });
  });
});

describe("p2", () => {
  describe("the example provided", () => {
    it("the total scratch cards remaining is 30", async () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
            Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
            Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
            Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
            Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
            Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

      const data = parseInput(input);
      const result = await calculateReaminingCards(data);
      expect(result).toEqual(30);
    });
  });

  describe("real input", () => {
    it("should return 5659035", () => {
      const raw = fs
        .readFileSync(path.join(__dirname, "input.data.txt"))
        .toString();

      const data = parseInput(raw);
      const result = calculateReaminingCards(data);
      console.log("p2 answer is", result);
      expect(result).toBe(5659035);
    });
  });
});
