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

# install Upgrades
npm install --save-dev @openzeppelin/hardhat-upgrades
npm install @openzeppelin/contracts-upgradeable

## Add to hardhat.config
// For JavaScript
require('@openzeppelin/hardhat-upgrades');

// For TypeScript
import '@openzeppelin/hardhat-upgrades';


```
