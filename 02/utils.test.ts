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
              "blue": 3,
              "red": 4,
            },
            {
              "blue": 6,
              "green": 2,
              "red": 1,
            },
            {
              "green": 2,
            },
          ],
        },
        {
          "ID": 2,
          "rounds": [
            {
              "blue": 1,
              "green": 2,
            },
            {
              "blue": 4,
              "green": 3,
              "red": 1,
            },
            {
              "blue": 1,
              "green": 1,
            },
          ],
        },
        {
          "ID": 3,
          "rounds": [
            {
              "blue": 6,
              "green": 8,
              "red": 20,
            },
            {
              "blue": 5,
              "green": 13,
              "red": 4,
            },
            {
              "green": 5,
              "red": 1,
            },
          ],
        },
        {
          "ID": 4,
          "rounds": [
            {
              "blue": 6,
              "green": 1,
              "red": 3,
            },
            {
              "green": 3,
              "red": 6,
            },
            {
              "blue": 15,
              "green": 3,
              "red": 14,
            },
          ],
        },
        {
          "ID": 5,
          "rounds": [
            {
              "blue": 1,
              "green": 3,
              "red": 6,
            },
            {
              "blue": 2,
              "green": 2,
              "red": 1,
            },
          ],
        },
      ]
    `);
  });
});
