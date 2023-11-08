import { ethers, upgrades } from "hardhat";
import { Contract, ContractFactory } from "ethers";

export const deployContract = async (contractName: string, ...args: any[]) => {
  const ContractFactory = await ethers.getContractFactory(contractName);
  const contract: Contract = await ContractFactory.deploy(...args);
  await contract.deployed();
  console.log(`${contractName} deployed to:`, contract.address);
  return contract;
};

export const deployUpgradeableContract = async (contractName: string, ...args: any[]) => {
  const contractFactory: ContractFactory = await ethers.getContractFactory(contractName);
  const contract: Contract = await upgrades.deployProxy(contractFactory, args, { initializer: "initialize" });
  await contract.waitForDeployment();
  console.log(`${contractName} deployed to:`, contract.address);
  return contract;
};
