"use strict";
// src/TraitManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitManager = void 0;
const UncommonTrait_1 = require("./rodarmorTraits/UncommonTrait");
const RareTrait_1 = require("./rodarmorTraits/RareTrait");
const EpicTrait_1 = require("./rodarmorTraits/EpicTrait");
const LegendaryTrait_1 = require("./rodarmorTraits/LegendaryTrait");
const MythicTrait_1 = require("./rodarmorTraits/MythicTrait");
class TraitManager {
    constructor() {
        this.traits = [];
        this.extraTraits = [];
        // Initialize Rodarmor Traits
        this.addTrait(new UncommonTrait_1.UncommonTrait());
        this.addTrait(new RareTrait_1.RareTrait());
        this.addTrait(new EpicTrait_1.EpicTrait());
        this.addTrait(new LegendaryTrait_1.LegendaryTrait());
        this.addTrait(new MythicTrait_1.MythicTrait());
        // Initialize Extra Traits
        // this.addExtraTrait(new PalindromeTrait());
        // this.addExtraTrait(new Block9Trait());
        // this.addExtraTrait(new Block78Trait());
        // this.addExtraTrait(new VintageTrait());
    }
    addTrait(trait) {
        this.traits.push(trait);
    }
    addExtraTrait(trait) {
        this.extraTraits.push(trait);
    }
    evaluateTraits(ordinal) {
        let results = this.traits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");
        let extraResults = this.extraTraits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");
        const priority = {
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
exports.TraitManager = TraitManager;
