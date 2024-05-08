"use strict";
// src/traits/extraTraits/Block9Trait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block9Trait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class Block9Trait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber === 9) ? "block9" : "";
    }
}
exports.Block9Trait = Block9Trait;
