// src/traits/extraTraits/Block78Trait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../../controller/utils/BlockCounter';

export class Block78Trait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the block number is 78
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber === 78 ) ? "block78" : "";
  }
}
