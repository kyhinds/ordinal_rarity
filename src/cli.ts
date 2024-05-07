import { Command } from 'commander';
import { TraitManager } from './traits/TraitManager';
import { UncommonTrait } from './traits/rodarmorTraits/UncommonTrait';
import { RareTrait } from './traits/rodarmorTraits/RareTrait';
import { EpicTrait } from './traits/rodarmorTraits/EpicTrait';
import { LegendaryTrait } from './traits/rodarmorTraits/LegendaryTrait';
import { MythicTrait } from './traits/rodarmorTraits/MythicTrait';

const program = new Command();
program.version('1.0.0');

const traitManager = new TraitManager(); // we add all the traits to the trait manager
traitManager.addTrait(new UncommonTrait());
traitManager.addTrait(new RareTrait());
traitManager.addTrait(new EpicTrait());
traitManager.addTrait(new LegendaryTrait());
traitManager.addTrait(new MythicTrait());

program // we add a command to evaluate the traits of an ordinal
  .argument('<ordinal>', 'Enter an ordinal number')
  .action((ordinal: any) => {
    const results = traitManager.evaluateTraits(parseInt(ordinal, 10));
    console.log(`Results for ordinal ${ordinal}: ${results.join(", ")}`);
  });

program.parse(process.argv); // we parse the command line arguments
