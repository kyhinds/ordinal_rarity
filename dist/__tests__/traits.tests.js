"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TraitManager_1 = require("../model/traits/TraitManager");
const UncommonTrait_1 = require("../model/traits/rodarmorTraits/UncommonTrait");
const RareTrait_1 = require("../model/traits/rodarmorTraits/RareTrait");
const EpicTrait_1 = require("../model/traits/rodarmorTraits/EpicTrait");
const LegendaryTrait_1 = require("../model/traits/rodarmorTraits/LegendaryTrait");
const MythicTrait_1 = require("../model/traits/rodarmorTraits/MythicTrait");
const BlockCounter_1 = require("../controller/utils/BlockCounter");
describe('Rarity Traits', () => {
    test('Uncommon Trait - First Sat of Block', () => {
        const uncommonTrait = new UncommonTrait_1.UncommonTrait();
        expect(uncommonTrait.evaluate(0)).toContain("uncommon");
        expect(uncommonTrait.evaluate(1798400000000000)).toContain("uncommon");
        expect(uncommonTrait.evaluate(5000000000)).toContain("uncommon");
    });
    test('Rare Trait - First Sat of Difficulty Adjustment Period', () => {
        const rareTrait = new RareTrait_1.RareTrait();
        expect(rareTrait.evaluate(0)).toContain("rare"); // Genesis block is rare
        expect(rareTrait.evaluate(1859550000000000)).toContain("rare");
        expect(rareTrait.evaluate(655200000000000)).toContain("rare");
    });
    test('Epic Trait - First Sat of Halving Epoch', () => {
        const epicTrait = new EpicTrait_1.EpicTrait();
        expect(epicTrait.evaluate(0)).toContain("epic"); // Genesis block is epic
        expect(epicTrait.evaluate(BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(210000))).toContain("epic");
        expect(epicTrait.evaluate(BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(420000))).toContain("epic");
        expect(epicTrait.evaluate(BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(840000))).toContain("epic");
        expect(epicTrait.evaluate(1050000000000000)).toContain("epic");
    });
    test('Legendary Trait - First Sat of Cycle', () => {
        const legendaryTrait = new LegendaryTrait_1.LegendaryTrait();
        expect(legendaryTrait.evaluate(0)).toContain("legendary"); // Genesis block is legendary
        expect(legendaryTrait.evaluate(BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(210000 * 6))).toContain("legendary");
        expect(legendaryTrait.evaluate(BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(210000 * 12))).toContain("legendary");
        expect(legendaryTrait.evaluate(BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(210000 * 18))).toContain("legendary");
    });
    test('Mythic Trait - First Sat Ever', () => {
        const mythicTrait = new MythicTrait_1.MythicTrait();
        expect(mythicTrait.evaluate(0)).toContain("mythic"); // Genesis block is mythic
    });
    test('Common Trait - No Specific Rarity', () => {
        const traitManager = new TraitManager_1.TraitManager();
        traitManager.addTrait(new UncommonTrait_1.UncommonTrait());
        traitManager.addTrait(new RareTrait_1.RareTrait());
        traitManager.addTrait(new EpicTrait_1.EpicTrait());
        traitManager.addTrait(new LegendaryTrait_1.LegendaryTrait());
        traitManager.addTrait(new MythicTrait_1.MythicTrait());
        let result = traitManager.evaluateTraits(1);
        expect(result).toContain("common");
        result = traitManager.evaluateTraits(891828939818945);
    });
});
