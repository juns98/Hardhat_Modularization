import { ethers, upgrades } from "hardhat";

export const deployContract = async (contractName: string, ...args: any[]) => {
  const ContractFactory = await ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy(...args);
  await contract.deployed();
  console.log(`${contractName} deployed to:`, contract.address);
  return contract;
};

export const deployUpgradeableContract = async (contractName: string, ...args: any[]) => {
  const ContractFactory = await ethers.getContractFactory(contractName);
  const contract = await upgrades.deployProxy(ContractFactory, args, { initializer: "initialize" });
  await contract.waitForDeployment();
  console.log(`${contractName} deployed to:`, contract.address);
  return contract;
};
