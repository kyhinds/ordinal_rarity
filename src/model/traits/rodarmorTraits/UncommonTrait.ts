// src/traits/UncommonTrait.ts
import { ITrait } from "../ITrait";
import { BlockCounter } from '../../../controller/utils/BlockCounter';

export class UncommonTrait implements ITrait {
  static initialReward = 5000000000; // Initial reward in sats (50 BTC)

  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the ordinal is the first ordinal of the block
    const blockNumber = BlockCounter.findBlock(ordinal);
    // Calculate the first ordinal of the block
    const firstOrdinalOfBlock = BlockCounter.calculateFirstOrdinalOfBlock(blockNumber);
    
    return ordinal === firstOrdinalOfBlock ? "uncommon" : "";
  }
}
