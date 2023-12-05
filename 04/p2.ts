import { parsedInput } from "./p1";

export const calculateReaminingCards = (input: parsedInput) => {
  const winCache = new Map<string, string[]>(
    input.map(([nums, winningNums, ID]) => {
      const winners: number[] = [];
      for (const x of nums) {
        if (winningNums.has(x)) {
          winners.push(x);
        }
      }

      const winningCardIds: string[] = [];
      for (let i = 1; i <= winners.length; i++) {
        const nextId = parseInt(ID) + i;
        winningCardIds.push(String(nextId));
      }
      return [ID, winningCardIds];
    })
  );

  let totalCards = input.length;
  const cardsToGrade = input.map(([_, __, ID]) => String(ID));
  const stream = cardsToGrade;

  for (const cardId of stream) {
    const winners = winCache.get(cardId);
    if (winners) {
      totalCards = totalCards + winners.length;
      winners.forEach((id) => stream.push(id));
    }
  }

  return totalCards;
};
