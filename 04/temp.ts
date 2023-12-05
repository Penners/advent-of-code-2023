import { describe, expect, it } from "vitest";
import { calculateTotalWinnings, parseInput } from "./p1";
import fs from "fs";
import path from "path";
import { calculateReaminingCards } from "./p2";

const main = async () => {
  const raw = fs
    .readFileSync(path.join(__dirname, "input.data.txt"))
    .toString();

  const data = parseInput(raw);
  const result = await calculateReaminingCards(data);
  console.log("p1 awnser is", result);
};

main();
