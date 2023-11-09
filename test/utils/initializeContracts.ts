import { Contract } from "ethers";
import { ethers } from "hardhat";
import { deployAll } from "../../scripts/deployAll";
import { testnetAddresses, testnetList } from "../../constants/testnetAddresses";

// Define the valid network names
type NetworkName = keyof typeof testnetAddresses;

export const initializeContracts = async (network: NetworkName, names: string[]): Promise<Record<string, Contract>> => {
  const contracts: Record<string, Contract> = {};

  if (network === "hardhat") {
    const deployedContracts: Record<string, Contract> = (await deployAll()) as Record<string, Contract>; // Type cast here

    for (const name of names) {
      if (deployedContracts[name]) {
        contracts[name] = deployedContracts[name];
      } else {
        console.error(`Unexpected contract name or missing mapping: ${name}`);
      }
    }
  } else {
    if (testnetList.includes(network)) {
      const testAddresses = testnetAddresses[network];
      for (const name of names) {
        if (testAddresses && testAddresses[name]) {
          contracts[name] = await ethers.getContractAt(name, testAddresses[name]);
        } else {
          console.error(`Unexpected contract name or missing mapping: ${name}`);
        }
      }
    } else {
      console.error(`Unexpected network name or missing mapping: ${network}`);
    }
  }

  return contracts;
};
