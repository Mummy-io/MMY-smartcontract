const Migrations = artifacts.require("Migrations");
const MMY = artifacts.require("MMY");

const ADMIN_ADDRESS = "0x817171DA3f7Db4CF909FBB40876852cD5e02e6Bb";

module.exports = async function (deployer) {
  await deployer.deploy(MMY, ADMIN_ADDRESS);
};