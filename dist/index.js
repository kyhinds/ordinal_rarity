"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const TraitManager_1 = require("./model/traits/TraitManager");
// Initialize the TraitManager and add traits
const traitManager = new TraitManager_1.TraitManager();
// Setup readline interface
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter an ordinal number (or type "exit" to quit): '
});
rl.prompt();
rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'exit') {
        rl.close();
    }
    else {
        const ordinal = parseInt(line.trim(), 10);
        if (!isNaN(ordinal)) {
            const results = traitManager.evaluateTraits(ordinal);
            console.log(`Results for ordinal ${ordinal}: ${results.join(", ")}`);
        }
        else {
            console.log('Please enter a valid number.');
        }
        rl.prompt();
    }
}).on('close', () => {
    console.log('Exiting the trait evaluator.');
    process.exit(0);
});
