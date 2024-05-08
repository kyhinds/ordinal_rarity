// src/traits/MythicTrait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../../controller/utils/BlockCounter';

export class MythicTrait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the ordinal is the first ordinal of the block and if the block number is 0
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber === 0 && ordinal === BlockCounter.calculateFirstOrdinalOfBlock(blockNumber)) ? "mythic" : "";
  }
}
