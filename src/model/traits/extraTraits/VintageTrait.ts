// src/traits/extraTraits/VintageTrait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../../controller/utils/BlockCounter';

export class VintageTrait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the block number is 78
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber < 1000 ) ? "vintage" : "";
  }
}
