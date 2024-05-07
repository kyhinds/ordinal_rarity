"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UncommonTrait = void 0;
const BlockCounter_1 = require("../../utils/BlockCounter");
class UncommonTrait {
    evaluate(ordinal) {
        const blockNumber = BlockCounter_1.BlockCounter.findBlock(ordinal);
        // Calculate the first ordinal of the block
        const firstOrdinalOfBlock = BlockCounter_1.BlockCounter.calculateFirstOrdinalOfBlock(blockNumber);
        return ordinal === firstOrdinalOfBlock ? "uncommon" : "";
    }
}
exports.UncommonTrait = UncommonTrait;
UncommonTrait.initialReward = 5000000000; // Initial reward in sats (50 BTC)
