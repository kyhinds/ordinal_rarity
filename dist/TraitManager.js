"use strict";
// src/TraitManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitManager = void 0;
class TraitManager {
    constructor() {
        this.traits = [];
    }
    addTrait(trait) {
        this.traits.push(trait);
    }
    evaluateTraits(ordinal) {
        return this.traits.map(trait => trait.evaluate(ordinal)).filter(result => result !== "");
    }
}
exports.TraitManager = TraitManager;
