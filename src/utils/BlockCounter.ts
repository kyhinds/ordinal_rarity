// src/utils/BlockCounter.ts
// the BlockCounter class contains two static methods, findBlock and calculateFirstOrdinalOfBlock, which are used to find the block number of an ordinal and the first ordinal of a block, respectively
export class BlockCounter {
    // the block reward changes every 210,000 blocks, so we must account for this
    static initialReward = 5000000000;  // 50 BTC in sats
    static blocksPerHalving = 210000;

    static findBlock(ordinal: number): number {
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
            currentReward /= 2;  // Halve the reward
        }
    }

    static calculateFirstOrdinalOfBlock(blockNumber: number): number {
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
