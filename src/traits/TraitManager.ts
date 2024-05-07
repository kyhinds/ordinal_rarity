// src/TraitManager.ts

import { ITrait } from './ITrait';

export class TraitManager {
  private traits: ITrait[] = [];

  addTrait(trait: ITrait): void {
    this.traits.push(trait);
  }
  // ordinals can have multiple traits, so we evaluate all traits and return the results
  evaluateTraits(ordinal: number): string[] {
    const results = this.traits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");

    // If no specific traits are found, return "common"
    if (results.length === 0) {
      results.push("common");
    }

    return results;
  }
}
