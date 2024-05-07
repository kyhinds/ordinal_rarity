// src/traits/LegendaryTrait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../utils/BlockCounter';

export class LegendaryTrait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the ordinal is the first ordinal of the block and if the block number is divisible by 1260000
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber % 1260000 === 0 && ordinal === BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "legendary" : "";
  }
}
