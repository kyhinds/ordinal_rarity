// src/traits/Block78Trait.ts

import { ITrait } from "../ITrait";
import { BlockCounter } from '../../utils/BlockCounter';

export class Block78Trait implements ITrait {
  evaluate(ordinal: number): string { 
    const blockNumber = BlockCounter.findBlock(ordinal);
    return (blockNumber === 78 ) ? "block78" : "";
  }
}
