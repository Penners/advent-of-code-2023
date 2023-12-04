export const parser = (input: string) => {
  return input.split("\n").map((line) => line.trim().split(""));
};

export const isNumeric = (input: string) => !isNaN(parseInt(input));

export const renderGrid = (grid: string[][]) => {
  console.log(grid.map((row) => row.join("  ")).join("\n"));
};

export const detectAdjacentSymbol = (
  x: number,
  y: number,
  grid: string[][]
) => {
  let startX = x - 1;
  let startY = y - 1;
  let hasAdjacentSymbol = false;

  for (let yi = 0; yi < 3; yi++) {
    for (let xi = 0; xi < 3; xi++) {
      let xCord = startX + xi;
      let yCord = startY + yi;

      if (!grid[yCord]) continue;
      if (!grid[yCord][xCord]) continue;
      const pointer = grid[yCord][xCord];

      if (grid[yCord][xCord] === ".") continue;
      if (isNumeric(grid[yCord][xCord])) continue;
      hasAdjacentSymbol = true;
    }
  }
  return hasAdjacentSymbol;
};

export const returnNumbersAdjacentToSymbols = (grid: string[][]) => {
  const numsWithAdjacentSymbol = [];
  for (let y = 0; y < grid.length; y++) {
    let currentNumber = "";
    let currentNumberHasSymbol = false;
    for (let x = 0; x < grid[0].length; x++) {
      const pointer = grid[y][x];
      const nextPointer = grid[y][x + 1];
      if (isNumeric(pointer)) {
        currentNumber = currentNumber.concat(pointer);
        const maybeHasSymbol = detectAdjacentSymbol(x, y, grid);
        if (!currentNumberHasSymbol && maybeHasSymbol) {
          currentNumberHasSymbol = true;
        }
      }

      if (!isNumeric(nextPointer) || nextPointer === undefined) {
        if (currentNumberHasSymbol) {
          numsWithAdjacentSymbol.push(parseInt(currentNumber));
        }
        currentNumber = "";
        currentNumberHasSymbol = false;
      }
    }
  }
  return numsWithAdjacentSymbol;
};

export const sumNumbersAdjacentToSymbols = (grid: string[][]) => {
  const data = returnNumbersAdjacentToSymbols(grid);
  return data.reduce((prev, current) => prev + current, 0);
};
