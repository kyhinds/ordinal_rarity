"use strict";
// src/utils/BlockCounter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockCounter = void 0;
class BlockCounter {
    static findBlock(ordinal) {
        let cumulativeSats = 0;
        let currentReward = BlockCounter.initialReward;
        let totalBlocks = 0;
        while (true) {
            let satsThisEpoch = currentReward * BlockCounter.blocksPerHalving;
            if (cumulativeSats + satsThisEpoch > ordinal) {
                return totalBlocks + Math.floor((ordinal - cumulativeSats) / currentReward);
            }
            cumulativeSats += satsThisEpoch;
            totalBlocks += BlockCounter.blocksPerHalving;
            currentReward /= 2; // Halve the reward
        }
    }
    static calculateFirstOrdinalOfBlock(blockNumber) {
        let cumulativeSats = 0;
        let currentReward = BlockCounter.initialReward;
        let totalBlocks = 0;
        while (totalBlocks + BlockCounter.blocksPerHalving <= blockNumber) {
            cumulativeSats += currentReward * BlockCounter.blocksPerHalving;
            totalBlocks += BlockCounter.blocksPerHalving;
            currentReward /= 2;
        }
        return cumulativeSats + (blockNumber - totalBlocks) * currentReward;
    }
}
exports.BlockCounter = BlockCounter;
BlockCounter.initialReward = 5000000000; // 50 BTC in sats
BlockCounter.blocksPerHalving = 210000;
