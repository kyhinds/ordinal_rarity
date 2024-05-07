// src/traits/RareTrait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../utils/BlockCounter';

export class RareTrait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the ordinal is the first ordinal of the block and if the block number is divisible by 2016
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber % 2016 === 0 && ordinal === BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "rare" : "";
  }
}
