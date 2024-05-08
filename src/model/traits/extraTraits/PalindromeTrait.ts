// src/traits/extraTraits/PalindromeTrait.ts

import { ITrait } from "../ITrait";

export class PalindromeTrait implements ITrait {
    evaluate(ordinal: number): string {
        const str = ordinal.toString();
        const len = str.length;
        const mid = Math.floor(len / 2);
        for (let i = 0; i < mid; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return ""; // Not a palindrome if characters don't match
            }
        }
        return "palindrome"; // It's a palindrome if no mismatches found
    }
}
