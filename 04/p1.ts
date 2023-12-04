export const parseInput = (raw: string) => {
  return raw.split("\n").map((row) => {
    const [_, data] = row.split(":");
    const [nums, winnings] = data.split("|").map((row) =>
      row
        .trim()
        .split(" ")
        .filter((candiate) => candiate.trim())
        .map((num) => parseInt(num))
    );
    return [nums, new Set(winnings)] as const;
  });
};

type parsedInput = ReturnType<typeof parseInput>;

export const calculateWinnings = ([input, winners]: parsedInput[number]) => {
  const winningsNumsCount = input.reduce((prev, current) => {
    if (winners.has(current)) {
      return prev + 1;
    }
    return prev;
  }, 0);
  let winnings = 0;
  for (let i = 1; i <= winningsNumsCount; i++) {
    if (winnings === 0) {
      winnings = 1;
    } else {
      winnings = winnings * 2;
    }
  }
  return winnings;
};

export const calculateTotalWinnings = (input: parsedInput) => {
  return input.reduce((prev, current) => {
    return prev + calculateWinnings(current);
  }, 0);
};
