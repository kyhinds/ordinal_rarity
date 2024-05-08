"use strict";
// src/traits/LegendaryTrait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegendaryTrait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class LegendaryTrait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber % 1260000 === 0 && ordinal === BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "legendary" : "";
    }
}
exports.LegendaryTrait = LegendaryTrait;
