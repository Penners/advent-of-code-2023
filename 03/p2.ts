import { isNumeric } from "./p1";

export const detectAdjacentSymbolP2 = (
  x: number,
  y: number,
  grid: string[][]
) => {
  let startX = x - 1;
  let startY = y - 1;
  let hasAdjacentSymbol = false;
  let symbols = [];

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
      symbols.push({ x: xCord, y: yCord, symbol: pointer });
    }
  }
  return [hasAdjacentSymbol, symbols] as const;
};

export const returnNumbersAdjacentToSymbolsP2 = (grid: string[][]) => {
  const numsWithAdjacentSymbol: [number, Map<string, string>][] = [];
  for (let y = 0; y < grid.length; y++) {
    let currentNumber = "";
    let currentNumberHasSymbol = false;
    let adjacentSymbols = new Map<string, string>();
    for (let x = 0; x < grid[0].length; x++) {
      const pointer = grid[y][x];
      const nextPointer = grid[y][x + 1];
      if (isNumeric(pointer)) {
        currentNumber = currentNumber.concat(pointer);
        const [maybeHasSymbol, symbols] = detectAdjacentSymbolP2(x, y, grid);
        symbols.forEach((sym) =>
          adjacentSymbols.set(`${sym.x}:${sym.y}`, sym.symbol)
        );
        if (!currentNumberHasSymbol && maybeHasSymbol) {
          currentNumberHasSymbol = true;
        }
      }

      if (!isNumeric(nextPointer) || nextPointer === undefined) {
        if (currentNumberHasSymbol) {
          numsWithAdjacentSymbol.push([
            parseInt(currentNumber),
            adjacentSymbols,
          ]);
        }
        currentNumber = "";
        currentNumberHasSymbol = false;
        adjacentSymbols = new Map<string, string>();
      }
    }
  }
  return numsWithAdjacentSymbol;
};

export const sumGearRatios = (grid: string[][]) => {
  const data = returnNumbersAdjacentToSymbolsP2(grid);
  const symMap = new Map<string, number[]>();
  data.forEach(([num, map]) => {
    Array.from(map.entries()).forEach(([cord, symbol]) => {
      if (symbol === "*") {
        if (!symMap.has(cord)) {
          symMap.set(cord, [num]);
        } else {
          const existing = symMap.get(cord) ?? [];
          symMap.set(cord, [...existing, num]);
        }
      }
    });
  });
  const sum = Array.from(symMap.entries()).reduce((prev, [cord, numbers]) => {
    // this was stressed in bold
    if (numbers.length === 2) {
      const ratio = numbers.reduce((p, curr) => p * curr, 1);
      return prev + ratio;
    }
    return prev;
  }, 0);
  return sum;
};
