"use strict";
// src/cli.ts
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const TraitManager_1 = require("./TraitManager");
const UncommonTrait_1 = require("./traits/rodarmorTraits/UncommonTrait");
const RareTrait_1 = require("./traits/rodarmorTraits/RareTrait");
const EpicTrait_1 = require("./traits/rodarmorTraits/EpicTrait");
const LegendaryTrait_1 = require("./traits/rodarmorTraits/LegendaryTrait");
const program = new commander_1.Command();
program.version('1.0.0');
const traitManager = new TraitManager_1.TraitManager();
traitManager.addTrait(new UncommonTrait_1.UncommonTrait());
traitManager.addTrait(new RareTrait_1.RareTrait());
traitManager.addTrait(new EpicTrait_1.EpicTrait());
traitManager.addTrait(new LegendaryTrait_1.LegendaryTrait());
program
    .argument('<ordinal>', 'Enter an ordinal number')
    .action((ordinal) => {
    const results = traitManager.evaluateTraits(parseInt(ordinal));
    console.log(`Results for ordinal ${ordinal}: ${results.join(", ")}`);
});
program.parse(process.argv);
