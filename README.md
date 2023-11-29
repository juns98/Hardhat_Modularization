# Useful Hardhat Modularization

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

## Dependencies

```shell
npm install --save-dev hardhat
npx hardhat init

# Core Hardhat and Ethers.js packages
npm install --save-dev hardhat@2.0.2 ethers@5.7.2

# OpenZeppelin Contracts and Upgrades
npm install --save-dev @openzeppelin/contracts@4.8.2 @openzeppelin/contracts-upgradeable@4.8.2 @openzeppelin/hardhat-upgrades@1.22.1 @openzeppelin/test-helpers@0.5.16

# Hardhat add-ons and utilities
npm install --save-dev @nomicfoundation/hardhat-network-helpers@1.0.8 @nomicfoundation/hardhat-toolbox@2.0.2

# Solidity coverage for testing
npm install --save-dev solidity-coverage@0.8.5

# Additional tools and libraries
npm install --save-dev dotenv@16.0.3 chai@4.3.7 web3@1.8.2 yargs@17.7.2

```

## Configuring Hardhat

```shell
// JavaScript
require('@openzeppelin/hardhat-upgrades');
require("solidity-coverage");

// TypeScript
import '@openzeppelin/hardhat-upgrades';
import "solidity-coverage";

```

## Additional Tools

Install and configure Solium for Solidity linting:

```shell
npm install -g solium

# Initialize configuration
solium --init

# Lint all files
solium --dir .

# Lint a specific file
solium --file myContract.sol
```

## Conducting Tests

```shell
npx hardhat test
npx hardhat coverage --testfiles "test/MyContract.test.ts"
```
