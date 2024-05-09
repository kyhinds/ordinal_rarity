// src/TraitManager.ts

import { ITrait } from './ITrait';
import { UncommonTrait } from './rodarmorTraits/UncommonTrait';
import { RareTrait } from './rodarmorTraits/RareTrait';
import { EpicTrait } from './rodarmorTraits/EpicTrait';
import { LegendaryTrait } from './rodarmorTraits/LegendaryTrait';
import { MythicTrait } from './rodarmorTraits/MythicTrait';
import { PalindromeTrait } from './extraTraits/PalindromeTrait';
import { Block9Trait } from './extraTraits/Block9Trait';
import { Block78Trait } from './extraTraits/Block78Trait';
import { VintageTrait } from './extraTraits/VintageTrait';

export class TraitManager {
  private traits: ITrait[] = [];
  private extraTraits: ITrait[] = [];

  constructor() {
    // Initialize Rodarmor Traits
    this.addTrait(new UncommonTrait());
    this.addTrait(new RareTrait());
    this.addTrait(new EpicTrait());
    this.addTrait(new LegendaryTrait());
    this.addTrait(new MythicTrait());

    // Initialize Extra Traits
    // this.addExtraTrait(new PalindromeTrait());
    // this.addExtraTrait(new Block9Trait());
    // this.addExtraTrait(new Block78Trait());
    // this.addExtraTrait(new VintageTrait());
  }

  addTrait(trait: ITrait): void {
    this.traits.push(trait);
  }

  addExtraTrait(trait: ITrait): void {
    this.extraTraits.push(trait);
  }

  evaluateTraits(ordinal: number): string[] { // we evaluate all the traits for an ordinal
    let results = this.traits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");
    let extraResults = this.extraTraits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");

    const priority: { [key: string]: number } = {
      "mythic": 5,
      "legendary": 4,
      "epic": 3,
      "rare": 2,
      "uncommon": 1,
      "common": 0
    };

    // Find the highest priority result as we return only one rodarmor trait, then we add any extra results
    let highestPriorityResult = results.length > 0 ? results.reduce((a, b) => priority[a] > priority[b] ? a : b) : "common";
    let finalResults = [highestPriorityResult, ...extraResults].filter((value, index, self) => self.indexOf(value) === index);

    return finalResults.length > 0 ? finalResults : ["common"];
  }
}
