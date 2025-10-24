const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // your proxy
  console.log("Upgrading contract to V2...");

  const MyContractV2 = await ethers.getContractFactory("MyContractV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, MyContractV2);

  console.log("Contract upgraded! Still at proxy address:", await upgraded.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
