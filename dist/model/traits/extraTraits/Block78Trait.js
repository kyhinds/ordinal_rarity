"use strict";
// src/traits/extraTraits/Block78Trait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block78Trait = void 0;
const BlockCounter_1 = require("../../../controller/utils/BlockCounter");
class Block78Trait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        return (blockNumber === 78) ? "block78" : "";
    }
}
exports.Block78Trait = Block78Trait;
