"use strict";
// src/traits/EpicTrait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpicTrait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class EpicTrait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber % 210000 === 0 && ordinal === BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "epic" : "";
    }
}
exports.EpicTrait = EpicTrait;
