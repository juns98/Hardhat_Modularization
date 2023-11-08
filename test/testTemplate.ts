import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import hre from "hardhat";
import { getTestAddress } from "../utils/getTestAddress";
import { provideLiquidity } from "../utils/utils";
import { deployAll } from "../../scripts/deploy/deployAll";
import { initializeContracts } from "./utils/initializeContracts";

const network: string = hre.network.name; // BIFROST, KLAYTN, EVMOS
console.log("current Network: ", network);

const contractLists = ["ContractA", "ContractB"];
describe("ILPToken functions test", function () {
  let contracts: Record<string, Contract>;

  let nonceDeployer: number;
  let nonceLP: number;
  let nonceUserA: number;
  let nonceUserB: number;
  let nonceUserC: number;
  let tx: any;

  before(async function () {
    const contracts = await initializeContracts(network, contractLists);
    for (const contractName of contractLists) {
      console.log(`${contractName} address: ${contracts[contractName].address}`);
    }
  });

  it("Test transfer, transferFrom function", async () => {
    const [deployer, user] = await ethers.getSigners();

    //* given

    //* when

    //* then

    // expect(lpILPBalanceAfter).to.equal(BigNumber.from(lpILPBalance).sub(transferAmount.mul(2)).toString());
  });
});
