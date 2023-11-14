import { Contract } from "ethers";
import { ethers } from "hardhat";
import { deployAll } from "../../scripts/deploy";
import { testnetAddresses } from "../../constants/testnetAddresses";

export const initializeContracts = async (network: string, names: string[]): Promise<any> => {
  // 1. Test on top of hardhat network
  if (network === "hardhat") {
    const deployedContracts = await deployAll(); // Type cast here
    return deployedContracts;
  }
  // 2. Test with actual deployed contracts
  else {
    const contracts: any = {};
    // get test addresses
    let testAddresses: any = {};
    if (network === "networkA") {
      testAddresses = testnetAddresses.networkA;
    } else if (network === "networkB") {
      testAddresses = testnetAddresses.networkB;
    }
    for (const name of names) {
      contracts[name] = await ethers.getContractAt(name, testAddresses[name]);
    }
    return contracts;
  }
};
