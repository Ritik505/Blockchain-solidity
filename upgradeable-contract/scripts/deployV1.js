const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyContractV1 = await ethers.getContractFactory("MyContractV1");
  console.log("Deploying MyContractV1...");

  const proxy = await upgrades.deployProxy(MyContractV1, [42], {
    initializer: "initialize",
  });

  await proxy.waitForDeployment();

  console.log("MyContractV1 deployed to proxy address:", await proxy.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
