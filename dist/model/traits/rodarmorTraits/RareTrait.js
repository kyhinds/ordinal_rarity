"use strict";
// src/traits/RareTrait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RareTrait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class RareTrait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber % 2016 === 0 && ordinal === BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "rare" : "";
    }
}
exports.RareTrait = RareTrait;
