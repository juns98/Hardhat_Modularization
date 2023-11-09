import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";
dotenv.config();

export const otherOptions = {
  upgradeable: true,
};

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {},

    //* NETWORKS *//
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
