// src/traits/extraTraits/Block9Trait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../../controller/utils/BlockCounter';

export class Block9Trait implements ITrait {
  evaluate(ordinal: number): string { // we first find the block number of the ordinal, then check if the block number is 9
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber === 9 ) ? "block9" : "";
  }
}
