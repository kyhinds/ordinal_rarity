"use strict";
// src/traits/extraTraits/VintageTrait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageTrait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class VintageTrait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber < 1000) ? "vintage" : "";
    }
}
exports.VintageTrait = VintageTrait;
