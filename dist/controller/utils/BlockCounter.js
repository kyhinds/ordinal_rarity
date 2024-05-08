"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockCounter = void 0;
// src/utils/BlockCounter.ts
// the BlockCounter class contains two static methods, findBlock and calculateFirstOrdinalOfBlock, which are used to find the block number of an ordinal and the first ordinal of a block, respectively
class BlockCounter {
    static findBlock(ordinal) {
        let cumulativeSats = 0; // Cumulative sats up to the current epoch
        let currentReward = BlockCounter.initialReward; // Current reward
        let totalBlocks = 0; // Total blocks up to the current epoch
        while (true) {
            let satsThisEpoch = currentReward * BlockCounter.blocksPerHalving;
            if (cumulativeSats + satsThisEpoch > ordinal) { // this gives us the block number of the ordinal
                return totalBlocks + Math.floor((ordinal - cumulativeSats) / currentReward);
            }
            cumulativeSats += satsThisEpoch;
            totalBlocks += BlockCounter.blocksPerHalving;
            currentReward /= 2; // Halve the reward
        }
    }
    static calculateFirstOrdinalOfBlock(blockNumber) {
        let cumulativeSats = 0; // Cumulative sats up to the current epoch
        let currentReward = BlockCounter.initialReward; // Current reward
        let totalBlocks = 0; // Total blocks up to the current epoch
        while (totalBlocks + BlockCounter.blocksPerHalving <= blockNumber) {
            cumulativeSats += currentReward * BlockCounter.blocksPerHalving;
            totalBlocks += BlockCounter.blocksPerHalving; // Move to the next epoch
            currentReward /= 2; // Halve the reward
        }
        return cumulativeSats + (blockNumber - totalBlocks) * currentReward; // this gives us the first ordinal of the block
    }
}
exports.BlockCounter = BlockCounter;
// the block reward changes every 210,000 blocks, so we must account for this
BlockCounter.initialReward = 5000000000; // 50 BTC in sats
BlockCounter.blocksPerHalving = 210000;
