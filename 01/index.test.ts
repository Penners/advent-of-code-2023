import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { part1Implementation, part2Implementation, santiseLine } from ".";

describe("santiseLine", () => {
  it("trims whitespace", () => {
    const input = `      foobar   `;
    const result = santiseLine(input);
    expect(result).toEqual("foobar");
  });
  it("replaces number name with number value", () => {
    const input = `      onefoobartwo   `;
    const result = santiseLine(input);
    expect(result).toEqual("o1nefoobart2wo");
  });
  it("works with sample lines", () => {
    const input = `twoeightnq6ninepxv`;
    const result = santiseLine(input);
    expect(result).toEqual("t2woe8ightnq6n9inepxv");
  });
  it("catches edge cases where number spellings overlap", () => {
    const input = `ab1seveninexd3`;
    const result = santiseLine(input);
    expect(result).toEqual("ab1s7even9inexd3");
  });
});

describe("Part 1 Example in question", () => {
  it("should total 142", () => {
    const input = `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`;
    const result = part1Implementation(input);

    expect(result).toBe(142);
  });

  it("Part 1 should deal with edge cases", () => {
    const input = `twofive2fourfive1dvnrrvjr
    twoeightnq6ninepxv
    39sixgphfvninexts71five
    seven3two8
    six59jhtfvv1five6
    7871three915`;

    const result = part1Implementation(input);

    expect(result).toBe(287);
  });
});

describe("Part 1 Full sample", () => {
  it("Should attempt to calcuate the answer", () => {
    const input = fs
      .readFileSync(path.join(__dirname, "data.sample.txt"))
      .toString();

    const result = part1Implementation(input);
    console.log(`Part 1: The answer is ${result}`);
    expect(result).toBe(53974);
  });
});

describe("Part 2 Full sample", () => {
  it("Should attempt to calcuate the answer", () => {
    const input = fs
      .readFileSync(path.join(__dirname, "data.sample.txt"))
      .toString();

    const result = part2Implementation(input);
    console.log(`Part 2: The answer is ${result}`);
    expect(result).toBe(52840);
  });
});
