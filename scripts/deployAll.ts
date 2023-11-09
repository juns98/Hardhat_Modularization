import hre, { ethers } from "hardhat";
import { contractInfos } from "./contractInfo";
import { deployContract, deployUpgradeableContract } from "./deployContract";
import { Contract } from "ethers";
import { otherOptions } from "../hardhat.config";

const network: string = hre.network.name;

export const deployAll = async () => {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts in ${network} with the account: ${deployer.address}`);

  const ContractAddresses: Record<string, any> = {};

  // Iterate through contract Infos
  let contract: Contract;
  for (const contractInfo of contractInfos) {
    if (otherOptions.upgradeable) {
      contract = await deployUpgradeableContract(contractInfo.name, ...contractInfo.args);
    } else {
      contract = await deployContract(contractInfo.name, ...contractInfo.args);
    }
    console.log(`${contractInfo.name} deployed to:`, contract.address);
    ContractAddresses[contractInfo.name] = contract.address;
  }

  return ContractAddresses;
};

(async () => {
  console.log("deploying start ...");
  const ContractAddresses = await deployAll();
  console.log("ContractAddresses: ", ContractAddresses);
  console.log("deploying end ...");
})();
