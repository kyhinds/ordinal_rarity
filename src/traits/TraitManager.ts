// src/TraitManager.ts

import { ITrait } from './ITrait';

export class TraitManager {
  private traits: ITrait[] = [];

  addTrait(trait: ITrait): void {
    this.traits.push(trait);
  }

  evaluateTraits(ordinal: number): string[] {
    // Define priorities with an index signature
    const priority: { [key: string]: number } = {
      mythic: 5,
      legendary: 4,
      epic: 3,
      rare: 2,
      uncommon: 1,
      common: 0
    };

    let results = this.traits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");

    // Find the highest-ranking rarity based on the defined priority
    let highestPriority = "common";  // Default to common
    results.forEach(rarity => {
      if (priority[rarity] > priority[highestPriority]) {
        highestPriority = rarity;
      }
    });

    // Return ["common"] if no specific traits are found, else return the highest priority rarity
    return highestPriority === "common" && results.length === 0 ? ["common"] : [highestPriority];
  }
}
