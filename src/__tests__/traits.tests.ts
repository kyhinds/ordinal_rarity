import { TraitManager } from '../traits/TraitManager';
import { UncommonTrait } from '../traits/rodarmorTraits/UncommonTrait';
import { RareTrait } from '../traits/rodarmorTraits/RareTrait';
import { EpicTrait } from '../traits/rodarmorTraits/EpicTrait';
import { LegendaryTrait } from '../traits/rodarmorTraits/LegendaryTrait';
import { MythicTrait } from '../traits/rodarmorTraits/MythicTrait';
import { BlockCounter } from '../utils/BlockCounter';

describe('Rarity Traits', () => {

    test('Uncommon Trait - First Sat of Block', () => {
      const uncommonTrait = new UncommonTrait();
      expect(uncommonTrait.evaluate(0)).toContain("uncommon");
      expect(uncommonTrait.evaluate(1798400000000000)).toContain("uncommon");
      expect(uncommonTrait.evaluate(5000000000)).toContain("uncommon");
      expect(uncommonTrait.evaluate(99999999)).toBe("");
    });

    test('Rare Trait - First Sat of Difficulty Adjustment Period', () => {
      const rareTrait = new RareTrait();
      expect(rareTrait.evaluate(0)).toContain("rare");  // Genesis block is rare
      expect(rareTrait.evaluate(1859550000000000)).toContain("rare");
      expect(rareTrait.evaluate(655200000000000)).toContain("rare");
      expect(rareTrait.evaluate(201599999999)).toBe("");
    });
  
    test('Epic Trait - First Sat of Halving Epoch', () => {
      const epicTrait = new EpicTrait();
      expect(epicTrait.evaluate(0)).toContain("epic");  // Genesis block is epic
      expect(epicTrait.evaluate(BlockCounter.calculateFirstOrdinalOfBlock(210000))).toContain("epic");
      expect(epicTrait.evaluate(BlockCounter.calculateFirstOrdinalOfBlock(420000))).toContain("epic");
      expect(epicTrait.evaluate(BlockCounter.calculateFirstOrdinalOfBlock(840000))). toContain("epic");
    });

    test('Legendary Trait - First Sat of Cycle', () => {
      const legendaryTrait = new LegendaryTrait();
      expect(legendaryTrait.evaluate(0)).toContain("legendary");  // Genesis block is legendary
      expect(legendaryTrait.evaluate(BlockCounter.calculateFirstOrdinalOfBlock(210000*6))).toContain("legendary");
      expect(legendaryTrait.evaluate(BlockCounter.calculateFirstOrdinalOfBlock(210000*12))).toContain("legendary");
      expect(legendaryTrait.evaluate(BlockCounter.calculateFirstOrdinalOfBlock(210000*18))).toContain("legendary");
    });

    test('Mythic Trait - First Sat Ever', () => {
        const mythicTrait = new MythicTrait();
        expect(mythicTrait.evaluate(0)).toContain("mythic");  // Genesis block is mythic
    });

    test('Common Trait - No Specific Rarity', () => {
        const traitManager = new TraitManager();
        traitManager.addTrait(new UncommonTrait());
        traitManager.addTrait(new RareTrait());
        traitManager.addTrait(new EpicTrait());
        traitManager.addTrait(new LegendaryTrait());
        traitManager.addTrait(new MythicTrait());

        const result = traitManager.evaluateTraits(99999999);
        expect(result).toContain("common");
    });
});
