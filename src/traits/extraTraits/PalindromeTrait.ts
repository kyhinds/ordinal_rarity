// src/traits/rodarmorTraits/PalindromeTrait.ts

import { ITrait } from "../ITrait";

export class PalindromeTrait implements ITrait {
    evaluate(ordinal: number): string {
        const str = ordinal.toString();
        const isPalindrome = str === str.split('').reverse().join('');
        return isPalindrome ? "palindrome" : "";
    }
}
