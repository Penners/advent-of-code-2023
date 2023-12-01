const isNumeric = (input: string) => !isNaN(parseInt(input));
const numberNames = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

export const santiseLine = (input: string): string => {
  let output = input.trim();
  Array.from(numberNames.entries()).forEach(([numName, num]) => {
    // this is a bit of a hack, to allow overlapping spellings
    const arr = Array.from(numName);
    arr.splice(1, 0, String(num));
    const replacement = arr.join("");
    output = output.replaceAll(numName, replacement);
  });
  return output;
};

export const part1Implementation = (input: string): number => {
  let output = 0;
  input.split("\n").forEach((line) => {
    const clean = line.trim();
    let first;
    let last;
    for (let i = 0; i < clean.length; i++) {
      if (first !== undefined && last !== undefined) {
        break;
      }
      const left = clean[i];
      const right = clean[clean.length - 1 - i];

      if (isNumeric(left) && first === undefined) {
        first = left;
      }
      if (isNumeric(right) && last === undefined) {
        last = right;
      }
    }
    const lineTotal = parseInt(`${first}${last}`);
    if (first === undefined || last === undefined) {
      throw new Error("Error expected both a first and last digit");
    }
    output = output + lineTotal;
  });

  return output;
};

export const part2Implementation = (input: string): number => {
  let output = 0;
  input.split("\n").forEach((line) => {
    const clean = santiseLine(line);
    let first;
    let last;
    for (let i = 0; i < clean.length; i++) {
      if (first !== undefined && last !== undefined) {
        break;
      }
      const left = clean[i];
      const right = clean[clean.length - 1 - i];

      if (isNumeric(left) && first === undefined) {
        first = left;
      }
      if (isNumeric(right) && last === undefined) {
        last = right;
      }
    }
    const lineTotal = parseInt(`${first}${last}`);
    if (first === undefined || last === undefined) {
      throw new Error("Error expected both a first and last digit");
    }

    output = output + lineTotal;
  });

  return output;
};
