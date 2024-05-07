// src/traits/EpicTrait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../utils/BlockCounter';

export class EpicTrait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the ordinal is the first ordinal of the block and if the block number is divisible by 210000
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber % 210000 === 0 && ordinal === BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "epic" : "";
  }
}
