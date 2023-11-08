import hre, { ethers } from "hardhat";
import { contractInfos } from "./contractInfo";

//-----------------------------------------------------------------------------------------------//
//====================================== Change this part ========================================//
const network: string = hre.network.name;

//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//

const deploy = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ContractAddresses: Record<string, string> = {};
  // Iterate through contract Infos
  for (const contractInfo of contractInfos) {
    const ContractFactory = await ethers.getContractFactory(contractInfo.name);
    const contract = await ContractFactory.deploy(...contractInfo.args);
    await contract.deployed();
    console.log(`${contractInfo.name} deployed to:`, contract.address);
    ContractAddresses[contractInfo.name] = contract.address;
  }
};

(async () => {
  console.log("deploying start ...");
  const ContractAddresses = await deploy();
  console.log("ContractAddresses: ", ContractAddresses);
  console.log("deploying end ...");
})();
