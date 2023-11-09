import { Contract } from "ethers";
import { ethers } from "hardhat";
import hre from "hardhat";
import { initializeContracts } from "./utils/initializeContracts";

const network: string = hre.network.name; // Network Name
console.log("current Network: ", network);

const contractLists = ["Lock", "Lock2"]; // Test Contracts
describe("Function Test Template", function () {
  let contracts: Record<string, Contract>;

  //* Init Contracts *//
  before(async function () {
    const contracts = await initializeContracts(network, contractLists);
    for (const contractName of contractLists) {
      console.log(`${contractName} address: ${contracts[contractName].address}`);
    }
  });

  //* Test Function *//
  it("Test transfer, transferFrom function", async () => {
    const [deployer, user] = await ethers.getSigners();

    //* given

    //* when

    //* then
    // sample code for mocha
    // expect(balance).to.equal(balance1.sub(balance2));
  });
});
