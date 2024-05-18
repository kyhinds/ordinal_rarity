export class BlockCounter {
    static initialReward = 5000000000; // 50 BTC in sats
    static blocksPerHalving = 210000;

    static findBlock(ordinal: number): number {
        let cumulativeSats = 0;
        let currentReward = BlockCounter.initialReward;
        let totalBlocks = 0;

        while (true) {
            let satsThisEpoch = currentReward * BlockCounter.blocksPerHalving;
            if (cumulativeSats + satsThisEpoch > ordinal) {
                let blocksPast = Math.floor((ordinal - cumulativeSats) / currentReward);
                return totalBlocks + blocksPast;
            }
            cumulativeSats += satsThisEpoch;
            totalBlocks += BlockCounter.blocksPerHalving;
            currentReward = Math.floor(currentReward / 2);  // Ensuring reward is always an integer
        }
    }

    static calculateFirstOrdinalOfBlock(blockNumber: number): number {
        let cumulativeSats = 0;
        let currentReward = BlockCounter.initialReward;
        let totalBlocks = 0;

        while (totalBlocks + BlockCounter.blocksPerHalving <= blockNumber) {
            cumulativeSats += currentReward * BlockCounter.blocksPerHalving;
            totalBlocks += BlockCounter.blocksPerHalving;
            currentReward = Math.floor(currentReward / 2); // Ensuring reward is always an integer
        }

        if (totalBlocks <= blockNumber) {
            return cumulativeSats + (blockNumber - totalBlocks) * currentReward;
        } else {
            return cumulativeSats; // This case should not normally be hit due to loop condition
        }
    }
}
