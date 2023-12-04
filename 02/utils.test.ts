import { describe, expect, expectTypeOf, it } from "vitest";
import fs from "fs";
import path from "path";
import { parseInput } from "./utils";

describe("utils", () => {
  it("parses the input", () => {
    const input = fs
      .readFileSync(path.join(__dirname, "data.sample.txt"))
      .toString();

    const output = parseInput(input);
    expect(output).toMatchInlineSnapshot(`
      [
        {
          "ID": 1,
          "rounds": [
            {
              "blue": 6,
              "green": 1,
              "red": 2,
            },
            {
              "blue": 3,
              "green": 1,
              "red": 4,
            },
            {
              "blue": 7,
              "green": 5,
            },
            {
              "blue": 6,
              "green": 1,
              "red": 2,
            },
          ],
        },
        {
          "ID": 2,
          "rounds": [
            {
              "green": 1,
              "red": 17,
            },
            {
              "blue": 1,
              "green": 7,
              "red": 6,
            },
            {
              "blue": 2,
              "green": 7,
              "red": 4,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 6,
            },
          ],
        },
        {
          "ID": 3,
          "rounds": [
            {
              "blue": 15,
              "green": 15,
              "red": 6,
            },
            {
              "blue": 12,
              "green": 1,
              "red": 4,
            },
            {
              "blue": 14,
              "green": 1,
              "red": 9,
            },
            {
              "blue": 15,
              "green": 12,
              "red": 2,
            },
          ],
        },
        {
          "ID": 4,
          "rounds": [
            {
              "blue": 10,
              "green": 8,
              "red": 6,
            },
            {
              "blue": 20,
              "red": 4,
            },
            {
              "blue": 17,
              "green": 2,
              "red": 3,
            },
            {
              "blue": 4,
              "green": 2,
              "red": 3,
            },
            {
              "blue": 3,
              "green": 3,
              "red": 10,
            },
            {
              "blue": 14,
              "green": 5,
              "red": 6,
            },
          ],
        },
        {
          "ID": 5,
          "rounds": [
            {
              "blue": 8,
              "green": 3,
              "red": 2,
            },
            {
              "blue": 11,
              "green": 6,
              "red": 11,
            },
            {
              "blue": 5,
              "green": 2,
              "red": 8,
            },
          ],
        },
        {
          "ID": 6,
          "rounds": [
            {
              "blue": 2,
              "green": 2,
              "red": 12,
            },
            {
              "green": 3,
              "red": 2,
            },
            {
              "blue": 3,
              "green": 3,
              "red": 10,
            },
            {
              "blue": 2,
              "green": 4,
              "red": 7,
            },
            {
              "blue": 2,
              "green": 5,
              "red": 1,
            },
          ],
        },
        {
          "ID": 7,
          "rounds": [
            {
              "blue": 8,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 2,
              "green": 12,
              "red": 1,
            },
            {
              "blue": 1,
            },
            {
              "blue": 3,
              "green": 3,
            },
          ],
        },
        {
          "ID": 8,
          "rounds": [
            {
              "blue": 4,
              "green": 10,
              "red": 4,
            },
            {
              "blue": 1,
              "green": 12,
            },
            {
              "blue": 2,
              "green": 13,
              "red": 1,
            },
            {
              "blue": 3,
              "green": 12,
            },
            {
              "green": 9,
              "red": 7,
            },
          ],
        },
        {
          "ID": 9,
          "rounds": [
            {
              "blue": 1,
              "green": 1,
              "red": 3,
            },
            {
              "blue": 3,
              "green": 8,
              "red": 3,
            },
            {
              "blue": 6,
              "green": 6,
              "red": 4,
            },
            {
              "green": 7,
              "red": 2,
            },
            {
              "blue": 13,
              "green": 10,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 5,
            },
          ],
        },
        {
          "ID": 10,
          "rounds": [
            {
              "blue": 3,
              "green": 9,
              "red": 3,
            },
            {
              "blue": 2,
              "green": 12,
            },
            {
              "blue": 1,
              "green": 18,
            },
            {
              "green": 14,
            },
            {
              "blue": 2,
              "green": 9,
              "red": 2,
            },
          ],
        },
        {
          "ID": 11,
          "rounds": [
            {
              "green": 14,
            },
            {
              "blue": 11,
              "green": 2,
              "red": 2,
            },
            {
              "blue": 9,
              "green": 3,
            },
          ],
        },
        {
          "ID": 12,
          "rounds": [
            {
              "blue": 3,
              "green": 9,
              "red": 8,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 3,
            },
            {
              "blue": 4,
              "green": 10,
              "red": 8,
            },
            {
              "blue": 3,
              "green": 8,
              "red": 7,
            },
            {
              "blue": 3,
              "green": 7,
              "red": 5,
            },
            {
              "blue": 2,
              "green": 5,
            },
          ],
        },
        {
          "ID": 13,
          "rounds": [
            {
              "blue": 1,
              "green": 10,
              "red": 6,
            },
            {
              "green": 1,
              "red": 7,
            },
            {
              "blue": 1,
              "green": 2,
              "red": 8,
            },
          ],
        },
        {
          "ID": 14,
          "rounds": [
            {
              "blue": 4,
              "green": 2,
              "red": 2,
            },
            {
              "blue": 1,
              "green": 2,
              "red": 5,
            },
            {
              "blue": 6,
              "red": 1,
            },
          ],
        },
        {
          "ID": 15,
          "rounds": [
            {
              "blue": 7,
              "red": 3,
            },
            {
              "blue": 13,
              "green": 1,
              "red": 8,
            },
            {
              "blue": 13,
              "green": 1,
              "red": 5,
            },
            {
              "blue": 5,
              "red": 8,
            },
            {
              "blue": 3,
              "green": 1,
              "red": 4,
            },
            {
              "blue": 12,
              "green": 1,
              "red": 8,
            },
          ],
        },
        {
          "ID": 16,
          "rounds": [
            {
              "blue": 5,
              "green": 1,
              "red": 2,
            },
            {
              "blue": 2,
              "green": 20,
            },
            {
              "blue": 4,
              "green": 17,
              "red": 1,
            },
            {
              "blue": 5,
              "green": 10,
              "red": 2,
            },
          ],
        },
        {
          "ID": 17,
          "rounds": [
            {
              "blue": 13,
              "green": 8,
              "red": 6,
            },
            {
              "blue": 12,
              "green": 7,
              "red": 9,
            },
            {
              "blue": 19,
              "red": 5,
            },
            {
              "blue": 14,
              "green": 2,
              "red": 8,
            },
          ],
        },
        {
          "ID": 18,
          "rounds": [
            {
              "blue": 1,
              "green": 2,
              "red": 5,
            },
            {
              "blue": 8,
              "green": 9,
              "red": 17,
            },
            {
              "blue": 2,
              "green": 1,
            },
            {
              "blue": 4,
              "red": 10,
            },
            {
              "blue": 5,
              "green": 6,
              "red": 4,
            },
          ],
        },
        {
          "ID": 19,
          "rounds": [
            {
              "green": 12,
              "red": 5,
            },
            {
              "blue": 1,
              "green": 13,
              "red": 8,
            },
            {
              "blue": 3,
              "green": 1,
              "red": 1,
            },
            {
              "green": 5,
              "red": 5,
            },
          ],
        },
        {
          "ID": 20,
          "rounds": [
            {
              "blue": 8,
              "red": 11,
            },
            {
              "blue": 13,
              "green": 2,
              "red": 9,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 2,
            },
            {
              "blue": 9,
              "green": 1,
              "red": 13,
            },
            {
              "blue": 3,
              "green": 1,
              "red": 5,
            },
          ],
        },
        {
          "ID": 21,
          "rounds": [
            {
              "blue": 11,
              "green": 4,
              "red": 1,
            },
            {
              "blue": 15,
              "green": 3,
            },
            {
              "blue": 14,
              "green": 6,
              "red": 7,
            },
            {
              "blue": 15,
              "green": 6,
              "red": 10,
            },
            {
              "blue": 16,
              "green": 2,
              "red": 6,
            },
          ],
        },
        {
          "ID": 22,
          "rounds": [
            {
              "blue": 2,
              "green": 15,
              "red": 2,
            },
            {
              "blue": 3,
              "green": 6,
              "red": 1,
            },
            {
              "blue": 2,
              "green": 5,
              "red": 1,
            },
            {
              "blue": 2,
              "green": 6,
              "red": 2,
            },
            {
              "blue": 2,
              "green": 4,
            },
            {
              "blue": 4,
              "green": 15,
              "red": 1,
            },
          ],
        },
        {
          "ID": 23,
          "rounds": [
            {
              "blue": 2,
              "green": 1,
              "red": 12,
            },
            {
              "blue": 5,
              "green": 4,
              "red": 11,
            },
            {
              "blue": 4,
              "red": 12,
            },
            {
              "blue": 5,
              "green": 2,
              "red": 12,
            },
          ],
        },
        {
          "ID": 24,
          "rounds": [
            {
              "blue": 4,
              "red": 7,
            },
            {
              "blue": 3,
              "red": 3,
            },
            {
              "blue": 4,
              "red": 1,
            },
            {
              "blue": 6,
              "green": 2,
              "red": 6,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 7,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 6,
            },
          ],
        },
        {
          "ID": 25,
          "rounds": [
            {
              "blue": 9,
              "green": 5,
            },
            {
              "blue": 2,
              "green": 6,
              "red": 7,
            },
            {
              "blue": 3,
              "green": 7,
              "red": 1,
            },
            {
              "blue": 9,
              "red": 3,
            },
            {
              "blue": 9,
              "green": 5,
              "red": 2,
            },
          ],
        },
        {
          "ID": 26,
          "rounds": [
            {
              "blue": 4,
              "red": 6,
            },
            {
              "blue": 2,
              "green": 4,
            },
            {
              "blue": 5,
              "green": 3,
              "red": 5,
            },
            {
              "blue": 3,
              "green": 4,
              "red": 6,
            },
            {
              "blue": 4,
              "green": 4,
              "red": 7,
            },
          ],
        },
        {
          "ID": 27,
          "rounds": [
            {
              "blue": 1,
              "green": 15,
              "red": 12,
            },
            {
              "green": 1,
              "red": 12,
            },
            {
              "blue": 1,
              "green": 5,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 13,
              "red": 6,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 5,
            },
            {
              "green": 14,
              "red": 11,
            },
          ],
        },
        {
          "ID": 28,
          "rounds": [
            {
              "blue": 3,
              "green": 2,
              "red": 10,
            },
            {
              "blue": 5,
              "green": 2,
            },
            {
              "blue": 3,
              "green": 4,
              "red": 11,
            },
          ],
        },
        {
          "ID": 29,
          "rounds": [
            {
              "blue": 10,
              "red": 2,
            },
            {
              "blue": 7,
              "green": 17,
              "red": 2,
            },
            {
              "blue": 1,
              "green": 8,
              "red": 1,
            },
            {
              "blue": 3,
              "green": 10,
              "red": 2,
            },
          ],
        },
        {
          "ID": 30,
          "rounds": [
            {
              "blue": 1,
              "green": 10,
              "red": 8,
            },
            {
              "blue": 4,
              "green": 7,
              "red": 14,
            },
            {
              "blue": 2,
              "green": 11,
              "red": 14,
            },
            {
              "blue": 1,
              "green": 13,
              "red": 12,
            },
            {
              "blue": 5,
              "green": 4,
              "red": 2,
            },
            {
              "green": 4,
              "red": 5,
            },
          ],
        },
        {
          "ID": 31,
          "rounds": [
            {
              "blue": 11,
              "green": 4,
              "red": 11,
            },
            {
              "blue": 3,
              "red": 11,
            },
            {
              "blue": 5,
              "green": 3,
              "red": 7,
            },
            {
              "blue": 10,
              "green": 5,
              "red": 1,
            },
          ],
        },
        {
          "ID": 32,
          "rounds": [
            {
              "blue": 8,
              "green": 1,
              "red": 4,
            },
            {
              "blue": 7,
              "green": 4,
              "red": 14,
            },
            {
              "blue": 3,
              "green": 9,
              "red": 13,
            },
            {
              "blue": 8,
              "green": 1,
              "red": 3,
            },
            {
              "blue": 5,
              "green": 8,
              "red": 8,
            },
          ],
        },
        {
          "ID": 33,
          "rounds": [
            {
              "blue": 10,
              "green": 7,
              "red": 6,
            },
            {
              "blue": 19,
              "red": 1,
            },
            {
              "blue": 11,
              "green": 6,
              "red": 11,
            },
            {
              "blue": 2,
              "green": 2,
              "red": 12,
            },
            {
              "blue": 13,
              "green": 7,
              "red": 3,
            },
            {
              "blue": 2,
              "green": 6,
              "red": 4,
            },
          ],
        },
        {
          "ID": 34,
          "rounds": [
            {
              "blue": 15,
              "green": 3,
              "red": 3,
            },
            {
              "blue": 15,
              "green": 7,
            },
            {
              "blue": 8,
              "green": 2,
              "red": 3,
            },
            {
              "blue": 18,
              "green": 19,
            },
          ],
        },
        {
          "ID": 35,
          "rounds": [
            {
              "blue": 1,
              "green": 2,
            },
            {
              "blue": 2,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 3,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 4,
              "red": 1,
            },
          ],
        },
        {
          "ID": 36,
          "rounds": [
            {
              "green": 11,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 1,
            },
            {
              "blue": 8,
            },
            {
              "green": 2,
              "red": 3,
            },
            {
              "red": 1,
            },
          ],
        },
        {
          "ID": 37,
          "rounds": [
            {
              "blue": 4,
              "red": 3,
            },
            {
              "blue": 12,
              "red": 13,
            },
            {
              "blue": 8,
              "green": 2,
              "red": 2,
            },
          ],
        },
        {
          "ID": 38,
          "rounds": [
            {
              "blue": 2,
              "red": 8,
            },
            {
              "green": 1,
              "red": 2,
            },
            {
              "blue": 1,
              "green": 2,
              "red": 8,
            },
            {
              "green": 2,
              "red": 16,
            },
            {
              "blue": 2,
              "green": 2,
              "red": 7,
            },
          ],
        },
        {
          "ID": 39,
          "rounds": [
            {
              "blue": 1,
              "green": 6,
              "red": 5,
            },
            {
              "blue": 8,
              "green": 14,
              "red": 6,
            },
            {
              "blue": 10,
              "green": 1,
              "red": 8,
            },
            {
              "green": 14,
              "red": 9,
            },
            {
              "blue": 17,
              "red": 5,
            },
            {
              "blue": 1,
              "green": 7,
              "red": 1,
            },
          ],
        },
        {
          "ID": 40,
          "rounds": [
            {
              "blue": 8,
              "green": 3,
              "red": 4,
            },
            {
              "blue": 13,
              "red": 1,
            },
            {
              "blue": 3,
              "green": 3,
              "red": 7,
            },
            {
              "blue": 8,
              "green": 3,
              "red": 10,
            },
            {
              "blue": 20,
              "green": 3,
              "red": 5,
            },
          ],
        },
        {
          "ID": 41,
          "rounds": [
            {
              "blue": 1,
              "green": 2,
            },
            {
              "blue": 2,
              "green": 11,
            },
            {
              "blue": 5,
            },
            {
              "blue": 5,
              "green": 8,
              "red": 15,
            },
          ],
        },
        {
          "ID": 42,
          "rounds": [
            {
              "blue": 12,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 6,
              "green": 1,
              "red": 5,
            },
            {
              "blue": 11,
              "green": 4,
              "red": 1,
            },
            {
              "blue": 17,
              "green": 1,
              "red": 3,
            },
            {
              "blue": 11,
              "red": 1,
            },
            {
              "blue": 9,
              "green": 6,
              "red": 3,
            },
          ],
        },
        {
          "ID": 43,
          "rounds": [
            {
              "blue": 16,
              "green": 13,
              "red": 1,
            },
            {
              "blue": 17,
              "green": 10,
              "red": 7,
            },
            {
              "blue": 7,
              "green": 13,
              "red": 5,
            },
          ],
        },
        {
          "ID": 44,
          "rounds": [
            {
              "blue": 2,
              "red": 4,
            },
            {
              "green": 15,
              "red": 7,
            },
            {
              "blue": 1,
              "green": 2,
            },
            {
              "green": 13,
              "red": 6,
            },
          ],
        },
        {
          "ID": 45,
          "rounds": [
            {
              "blue": 1,
              "green": 5,
              "red": 8,
            },
            {
              "blue": 1,
              "green": 5,
              "red": 4,
            },
            {
              "green": 1,
              "red": 3,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 6,
            },
            {
              "blue": 2,
              "green": 3,
              "red": 4,
            },
            {
              "blue": 2,
              "green": 5,
              "red": 2,
            },
          ],
        },
        {
          "ID": 46,
          "rounds": [
            {
              "blue": 6,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 11,
            },
            {
              "blue": 7,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 8,
            },
            {
              "blue": 7,
              "green": 1,
              "red": 2,
            },
          ],
        },
        {
          "ID": 47,
          "rounds": [
            {
              "blue": 9,
              "green": 7,
              "red": 7,
            },
            {
              "blue": 13,
              "green": 5,
              "red": 11,
            },
            {
              "blue": 12,
              "green": 12,
              "red": 5,
            },
            {
              "blue": 4,
              "green": 8,
              "red": 7,
            },
          ],
        },
        {
          "ID": 48,
          "rounds": [
            {
              "blue": 2,
              "green": 11,
              "red": 7,
            },
            {
              "blue": 2,
              "green": 10,
              "red": 3,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 2,
            },
            {
              "blue": 7,
              "green": 4,
              "red": 2,
            },
            {
              "blue": 2,
              "green": 4,
              "red": 7,
            },
          ],
        },
        {
          "ID": 49,
          "rounds": [
            {
              "blue": 2,
              "green": 5,
              "red": 1,
            },
            {
              "blue": 4,
              "green": 2,
            },
            {
              "blue": 5,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 9,
              "green": 1,
            },
            {
              "blue": 7,
            },
          ],
        },
        {
          "ID": 50,
          "rounds": [
            {
              "blue": 9,
              "green": 8,
              "red": 2,
            },
            {
              "blue": 5,
              "green": 2,
            },
            {
              "blue": 8,
              "green": 14,
              "red": 1,
            },
          ],
        },
        {
          "ID": 51,
          "rounds": [
            {
              "blue": 2,
              "green": 1,
            },
            {
              "blue": 12,
              "red": 1,
            },
            {
              "blue": 2,
            },
          ],
        },
        {
          "ID": 52,
          "rounds": [
            {
              "blue": 2,
              "green": 2,
              "red": 3,
            },
            {
              "blue": 7,
              "green": 4,
              "red": 4,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 4,
            },
            {
              "green": 3,
            },
            {
              "blue": 7,
              "green": 9,
              "red": 1,
            },
          ],
        },
        {
          "ID": 53,
          "rounds": [
            {
              "blue": 9,
              "green": 7,
              "red": 12,
            },
            {
              "blue": 8,
              "green": 6,
            },
            {
              "blue": 8,
              "green": 1,
              "red": 9,
            },
            {
              "green": 6,
              "red": 12,
            },
            {
              "blue": 9,
              "green": 10,
              "red": 14,
            },
            {
              "blue": 5,
              "green": 3,
              "red": 7,
            },
          ],
        },
        {
          "ID": 54,
          "rounds": [
            {
              "blue": 5,
              "green": 8,
              "red": 5,
            },
            {
              "blue": 13,
              "green": 4,
              "red": 2,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 5,
            },
            {
              "blue": 10,
              "green": 3,
              "red": 3,
            },
          ],
        },
        {
          "ID": 55,
          "rounds": [
            {
              "blue": 17,
              "green": 15,
              "red": 17,
            },
            {
              "blue": 7,
              "green": 5,
              "red": 6,
            },
            {
              "blue": 6,
              "green": 17,
              "red": 5,
            },
          ],
        },
        {
          "ID": 56,
          "rounds": [
            {
              "blue": 7,
              "green": 7,
              "red": 6,
            },
            {
              "green": 10,
              "red": 3,
            },
            {
              "blue": 3,
              "green": 5,
              "red": 9,
            },
          ],
        },
        {
          "ID": 57,
          "rounds": [
            {
              "blue": 5,
              "green": 1,
              "red": 11,
            },
            {
              "blue": 2,
              "green": 1,
              "red": 13,
            },
            {
              "blue": 2,
              "red": 4,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 10,
            },
            {
              "green": 1,
              "red": 8,
            },
          ],
        },
        {
          "ID": 58,
          "rounds": [
            {
              "blue": 9,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 6,
              "green": 2,
              "red": 2,
            },
            {
              "blue": 14,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 5,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 14,
              "green": 2,
            },
          ],
        },
        {
          "ID": 59,
          "rounds": [
            {
              "blue": 2,
              "green": 9,
              "red": 5,
            },
            {
              "green": 5,
              "red": 9,
            },
            {
              "blue": 1,
              "green": 8,
              "red": 10,
            },
          ],
        },
        {
          "ID": 60,
          "rounds": [
            {
              "blue": 8,
              "green": 4,
              "red": 6,
            },
            {
              "blue": 9,
              "green": 12,
              "red": 3,
            },
            {
              "blue": 4,
              "green": 5,
              "red": 5,
            },
            {
              "blue": 8,
              "red": 4,
            },
            {
              "blue": 12,
              "green": 7,
              "red": 6,
            },
          ],
        },
        {
          "ID": 61,
          "rounds": [
            {
              "blue": 5,
              "green": 1,
              "red": 13,
            },
            {
              "blue": 5,
              "red": 5,
            },
            {
              "blue": 3,
              "red": 1,
            },
            {
              "green": 1,
              "red": 9,
            },
            {
              "blue": 3,
              "green": 1,
              "red": 10,
            },
          ],
        },
        {
          "ID": 62,
          "rounds": [
            {
              "blue": 1,
              "red": 13,
            },
            {
              "blue": 4,
              "red": 5,
            },
            {
              "blue": 11,
              "green": 1,
              "red": 8,
            },
          ],
        },
        {
          "ID": 63,
          "rounds": [
            {
              "blue": 14,
              "red": 5,
            },
            {
              "blue": 9,
              "green": 14,
              "red": 5,
            },
            {
              "blue": 15,
              "green": 8,
              "red": 3,
            },
            {
              "blue": 4,
              "green": 15,
              "red": 6,
            },
          ],
        },
        {
          "ID": 64,
          "rounds": [
            {
              "blue": 6,
              "green": 11,
              "red": 13,
            },
            {
              "blue": 1,
              "green": 8,
              "red": 12,
            },
            {
              "green": 17,
              "red": 1,
            },
            {
              "blue": 7,
              "green": 12,
              "red": 13,
            },
          ],
        },
        {
          "ID": 65,
          "rounds": [
            {
              "blue": 17,
              "green": 3,
              "red": 4,
            },
            {
              "blue": 12,
              "green": 2,
              "red": 9,
            },
            {
              "blue": 17,
              "green": 2,
              "red": 5,
            },
            {
              "blue": 4,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 16,
              "red": 9,
            },
            {
              "blue": 7,
              "red": 9,
            },
          ],
        },
        {
          "ID": 66,
          "rounds": [
            {
              "blue": 10,
              "green": 10,
              "red": 5,
            },
            {
              "blue": 3,
              "green": 10,
              "red": 5,
            },
            {
              "blue": 10,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 20,
              "green": 2,
              "red": 5,
            },
            {
              "blue": 8,
              "green": 11,
              "red": 13,
            },
            {
              "blue": 18,
              "green": 2,
              "red": 2,
            },
          ],
        },
        {
          "ID": 67,
          "rounds": [
            {
              "green": 1,
              "red": 6,
            },
            {
              "blue": 10,
              "red": 5,
            },
            {
              "blue": 6,
              "red": 6,
            },
          ],
        },
        {
          "ID": 68,
          "rounds": [
            {
              "blue": 5,
              "green": 4,
              "red": 1,
            },
            {
              "blue": 5,
              "red": 5,
            },
            {
              "green": 6,
              "red": 7,
            },
            {
              "blue": 1,
              "red": 8,
            },
          ],
        },
        {
          "ID": 69,
          "rounds": [
            {
              "blue": 2,
              "red": 11,
            },
            {
              "blue": 1,
              "green": 6,
              "red": 4,
            },
            {
              "blue": 1,
              "green": 14,
              "red": 4,
            },
          ],
        },
        {
          "ID": 70,
          "rounds": [
            {
              "blue": 8,
              "green": 5,
              "red": 15,
            },
            {
              "blue": 8,
              "green": 5,
              "red": 2,
            },
            {
              "blue": 10,
              "green": 3,
              "red": 8,
            },
          ],
        },
        {
          "ID": 71,
          "rounds": [
            {
              "blue": 4,
              "red": 2,
            },
            {
              "blue": 4,
              "green": 12,
            },
            {
              "green": 10,
            },
          ],
        },
        {
          "ID": 72,
          "rounds": [
            {
              "blue": 3,
              "green": 4,
              "red": 6,
            },
            {
              "blue": 8,
              "green": 5,
              "red": 6,
            },
            {
              "blue": 5,
              "green": 6,
              "red": 10,
            },
            {
              "blue": 2,
              "green": 1,
            },
            {
              "blue": 5,
              "green": 4,
              "red": 10,
            },
          ],
        },
        {
          "ID": 73,
          "rounds": [
            {
              "blue": 5,
              "red": 1,
            },
            {
              "blue": 11,
              "green": 1,
            },
            {
              "blue": 10,
            },
            {
              "blue": 12,
              "red": 1,
            },
            {
              "blue": 9,
              "red": 1,
            },
            {
              "blue": 7,
              "green": 1,
              "red": 1,
            },
          ],
        },
        {
          "ID": 74,
          "rounds": [
            {
              "blue": 6,
              "green": 7,
              "red": 7,
            },
            {
              "blue": 7,
              "green": 6,
              "red": 15,
            },
            {
              "blue": 5,
              "green": 1,
              "red": 7,
            },
            {
              "blue": 1,
              "green": 8,
              "red": 6,
            },
            {
              "blue": 3,
              "green": 8,
              "red": 14,
            },
          ],
        },
        {
          "ID": 75,
          "rounds": [
            {
              "blue": 3,
              "green": 8,
              "red": 3,
            },
            {
              "blue": 1,
              "green": 7,
              "red": 6,
            },
            {
              "blue": 3,
              "green": 9,
            },
            {
              "blue": 3,
              "green": 9,
              "red": 6,
            },
            {
              "blue": 4,
              "green": 3,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 4,
              "red": 16,
            },
          ],
        },
        {
          "ID": 76,
          "rounds": [
            {
              "blue": 4,
              "green": 3,
            },
            {
              "blue": 2,
              "green": 6,
              "red": 1,
            },
            {
              "blue": 12,
            },
            {
              "blue": 14,
              "green": 1,
            },
          ],
        },
        {
          "ID": 77,
          "rounds": [
            {
              "blue": 11,
              "green": 5,
              "red": 10,
            },
            {
              "red": 3,
            },
            {
              "blue": 9,
              "green": 8,
              "red": 6,
            },
          ],
        },
        {
          "ID": 78,
          "rounds": [
            {
              "green": 7,
              "red": 7,
            },
            {
              "blue": 8,
            },
            {
              "blue": 5,
              "green": 6,
              "red": 7,
            },
          ],
        },
        {
          "ID": 79,
          "rounds": [
            {
              "blue": 11,
              "green": 4,
              "red": 2,
            },
            {
              "blue": 15,
              "green": 2,
              "red": 3,
            },
            {
              "blue": 15,
              "green": 1,
              "red": 1,
            },
          ],
        },
        {
          "ID": 80,
          "rounds": [
            {
              "blue": 8,
              "green": 17,
              "red": 3,
            },
            {
              "blue": 10,
              "green": 8,
            },
            {
              "blue": 14,
              "green": 4,
              "red": 1,
            },
          ],
        },
        {
          "ID": 81,
          "rounds": [
            {
              "blue": 10,
              "green": 17,
              "red": 10,
            },
            {
              "blue": 9,
              "green": 9,
              "red": 7,
            },
            {
              "blue": 4,
              "green": 11,
              "red": 11,
            },
            {
              "blue": 15,
              "red": 5,
            },
            {
              "blue": 11,
              "green": 8,
              "red": 15,
            },
            {
              "green": 3,
              "red": 16,
            },
          ],
        },
        {
          "ID": 82,
          "rounds": [
            {
              "blue": 9,
              "green": 8,
              "red": 1,
            },
            {
              "blue": 9,
              "green": 8,
              "red": 1,
            },
            {
              "blue": 12,
              "green": 2,
            },
          ],
        },
        {
          "ID": 83,
          "rounds": [
            {
              "blue": 20,
              "green": 2,
              "red": 11,
            },
            {
              "blue": 20,
              "green": 1,
              "red": 4,
            },
            {
              "blue": 20,
              "green": 2,
              "red": 6,
            },
            {
              "blue": 17,
              "red": 10,
            },
          ],
        },
        {
          "ID": 84,
          "rounds": [
            {
              "green": 1,
              "red": 9,
            },
            {
              "blue": 4,
              "green": 4,
            },
            {
              "blue": 14,
              "green": 1,
              "red": 6,
            },
          ],
        },
        {
          "ID": 85,
          "rounds": [
            {
              "blue": 9,
              "green": 10,
              "red": 5,
            },
            {
              "blue": 8,
              "green": 3,
              "red": 2,
            },
            {
              "blue": 4,
              "green": 14,
              "red": 3,
            },
            {
              "blue": 4,
              "red": 5,
            },
          ],
        },
        {
          "ID": 86,
          "rounds": [
            {
              "blue": 8,
              "green": 9,
              "red": 5,
            },
            {
              "blue": 1,
              "green": 10,
              "red": 5,
            },
            {
              "blue": 15,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 8,
              "green": 10,
              "red": 8,
            },
          ],
        },
        {
          "ID": 87,
          "rounds": [
            {
              "blue": 4,
              "green": 13,
              "red": 2,
            },
            {
              "blue": 9,
              "green": 11,
              "red": 3,
            },
            {
              "blue": 6,
              "green": 12,
              "red": 3,
            },
          ],
        },
        {
          "ID": 88,
          "rounds": [
            {
              "blue": 7,
              "green": 3,
              "red": 2,
            },
            {
              "blue": 2,
              "red": 9,
            },
            {
              "blue": 6,
              "green": 7,
              "red": 9,
            },
            {
              "blue": 13,
              "green": 6,
              "red": 9,
            },
            {
              "blue": 15,
              "green": 6,
              "red": 2,
            },
            {
              "blue": 7,
              "green": 8,
              "red": 1,
            },
          ],
        },
        {
          "ID": 89,
          "rounds": [
            {
              "blue": 1,
              "green": 2,
              "red": 11,
            },
            {
              "blue": 6,
              "green": 5,
              "red": 4,
            },
            {
              "blue": 5,
              "green": 4,
              "red": 15,
            },
            {
              "blue": 3,
              "green": 10,
              "red": 11,
            },
            {
              "blue": 6,
              "green": 13,
              "red": 12,
            },
          ],
        },
        {
          "ID": 90,
          "rounds": [
            {
              "blue": 2,
              "green": 4,
              "red": 2,
            },
            {
              "blue": 2,
              "red": 2,
            },
            {
              "blue": 1,
              "green": 9,
              "red": 1,
            },
            {
              "green": 5,
              "red": 1,
            },
            {
              "green": 7,
              "red": 2,
            },
            {
              "blue": 1,
              "green": 2,
            },
          ],
        },
        {
          "ID": 91,
          "rounds": [
            {
              "blue": 5,
              "green": 1,
              "red": 3,
            },
            {
              "blue": 4,
              "green": 6,
              "red": 1,
            },
            {
              "blue": 6,
              "green": 6,
              "red": 5,
            },
          ],
        },
        {
          "ID": 92,
          "rounds": [
            {
              "blue": 1,
              "green": 16,
              "red": 12,
            },
            {
              "blue": 1,
              "green": 18,
              "red": 14,
            },
            {
              "green": 1,
              "red": 16,
            },
            {
              "blue": 4,
              "green": 18,
              "red": 16,
            },
          ],
        },
        {
          "ID": 93,
          "rounds": [
            {
              "blue": 8,
              "green": 14,
              "red": 9,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 6,
            },
            {
              "blue": 4,
              "green": 14,
              "red": 4,
            },
          ],
        },
        {
          "ID": 94,
          "rounds": [
            {
              "blue": 4,
              "green": 11,
              "red": 2,
            },
            {
              "blue": 1,
              "green": 1,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 2,
              "red": 4,
            },
          ],
        },
        {
          "ID": 95,
          "rounds": [
            {
              "blue": 5,
              "green": 9,
              "red": 2,
            },
            {
              "blue": 5,
              "green": 8,
            },
            {
              "blue": 15,
              "green": 1,
            },
            {
              "blue": 5,
              "green": 9,
              "red": 5,
            },
            {
              "blue": 17,
              "green": 3,
              "red": 5,
            },
          ],
        },
        {
          "ID": 96,
          "rounds": [
            {
              "blue": 14,
              "green": 2,
              "red": 1,
            },
            {
              "blue": 14,
              "green": 3,
              "red": 3,
            },
            {
              "blue": 13,
              "green": 2,
              "red": 2,
            },
          ],
        },
        {
          "ID": 97,
          "rounds": [
            {
              "green": 2,
              "red": 2,
            },
            {
              "blue": 2,
              "green": 1,
            },
            {
              "blue": 7,
              "red": 3,
            },
          ],
        },
        {
          "ID": 98,
          "rounds": [
            {
              "blue": 1,
              "green": 12,
              "red": 2,
            },
            {
              "blue": 2,
              "green": 10,
              "red": 5,
            },
            {
              "blue": 9,
              "green": 11,
            },
            {
              "blue": 6,
              "green": 17,
            },
            {
              "blue": 7,
              "green": 9,
              "red": 9,
            },
            {
              "blue": 9,
              "green": 11,
              "red": 1,
            },
          ],
        },
        {
          "ID": 99,
          "rounds": [
            {
              "blue": 1,
              "green": 2,
              "red": 9,
            },
            {
              "blue": 1,
              "green": 3,
              "red": 14,
            },
            {
              "blue": 6,
              "green": 5,
            },
            {
              "blue": 1,
              "green": 2,
              "red": 3,
            },
            {
              "blue": 4,
              "green": 1,
              "red": 10,
            },
          ],
        },
        {
          "ID": 100,
          "rounds": [
            {
              "blue": 4,
              "green": 4,
              "red": 15,
            },
            {
              "blue": 13,
              "green": 3,
              "red": 1,
            },
            {
              "blue": 5,
              "green": 5,
              "red": 10,
            },
          ],
        },
      ]
    `);
  });
});
