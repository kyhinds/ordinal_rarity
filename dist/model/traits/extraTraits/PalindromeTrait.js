"use strict";
// src/traits/extraTraits/PalindromeTrait.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalindromeTrait = void 0;
class PalindromeTrait {
    evaluate(ordinal) {
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
exports.PalindromeTrait = PalindromeTrait;
