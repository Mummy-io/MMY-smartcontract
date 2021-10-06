const Migrations = artifacts.require("Migrations");
const MMY = artifacts.require("MMY");

const ADMIN_ADDRESS = "0x5Ba587a9927d5fAC115CC0154045B29CB4Df2839";

module.exports = async function (deployer) {
  await deployer.deploy(MMY, ADMIN_ADDRESS);
};