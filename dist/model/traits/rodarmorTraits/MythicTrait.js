"use strict";
// src/traits/MythicTrait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MythicTrait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class MythicTrait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber === 0 && ordinal === BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "mythic" : "";
    }
}
exports.MythicTrait = MythicTrait;
