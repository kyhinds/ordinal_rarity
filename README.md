# Rodarmor Rarity Traits

Rodarmor Rarity Traits is a command-line tool for evaluating the rarity of ordinal numbers based on a modular trait system. The traits include uncommon, rare, epic, legendary, mythic, and common.

## Overview

Ordinals are a numbering scheme for satoshis that allows tracking and transferring individual sats. The traits in this system are based on significant events in Bitcoin mining such as:

- **Blocks**: A new block is mined approximately every 10 minutes.
- **Difficulty Adjustments**: Every 2016 blocks, the Bitcoin network adjusts the difficulty target.
- **Halvings**: Every 210,000 blocks, the amount of new sats created in each block is halved.
- **Cycles**: Every six halvings, both the halving and the difficulty adjustment coincide.

### Rarity Levels

1. **Common**: Any sat that is not the first sat of its block.
2. **Uncommon**: The first sat of each block.
3. **Rare**: The first sat of each difficulty adjustment period.
4. **Epic**: The first sat of each halving epoch.
5. **Legendary**: The first sat of each cycle.
6. **Mythic**: The first sat of the genesis block.

## Setup

### Requirements

- Node.js (version 14 or above)
- npm

### Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Usage

To evaluate the rarity of an ordinal number, run the following command:

```bash
node dist/index.js
```

### Example

```bash
Enter an ordinal number (or type "exit" to quit): 5000000000
```

Output:

```
Results for ordinal 5000000000: uncommon
```

## Running Tests

To run the test suite, use:

```bash
npx jest
```

## Project Structure

- **src/**: Source code for the project.
    - **model/traits/**: Contains the modular trait classes.
    - **model/traits/TraitManager.ts**: Manages the evaluation of traits.
    - **controller/utils/**: Contains utility functions.
    - **index.ts**: Command-line interface for the project.
- **tests/**: Test cases for the project.
- **jest.config.js**: Configuration for Jest testing framework.
- **tsconfig.json**: TypeScript configuration file.

## License

This project is licensed under the MIT License.
```