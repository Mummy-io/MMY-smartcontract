const Migrations = artifacts.require("Migrations");
const MMY = artifacts.require("MMY");

const ADMIN_ADDRESS = "0xece6525911960c9E70d33BA7A152ddBa850148B8";

module.exports = async function (deployer) {
  await deployer.deploy(MMY, ADMIN_ADDRESS);
};
