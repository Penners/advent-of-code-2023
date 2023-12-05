import { parsedInput } from "./p1";
import { Readable } from "stream";
export const calculateReaminingCards = async (input: parsedInput) => {
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
  const stream = Readable.from(cardsToGrade);

  for await (const chunk of stream) {
    const cardId = chunk.toString();
    const winners = winCache.get(cardId);
    if (winners) {
      totalCards = totalCards + winners.length;
      console.log("wtf", totalCards);
      winners.forEach((id) => stream.push(id));
    }
  }

  return totalCards;
};
