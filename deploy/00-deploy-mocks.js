const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper-hardhat-config.js");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("                                                     ");
    log("-----------------------------------------------------");
    log("|    Local network detected - deploying mocks...    |");
    log("-----------------------------------------------------");
    log("                                                     ");

    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("                                                     ");
    log("-----------------------------------------------------");
    log("|                  Mocks deployed                   |");
    log("-----------------------------------------------------");
    log("                                                     ");
  }
};

module.exports.tags = ["all", "mocks"];
