require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // ✅ Matches your contract
      },
      {
        version: "0.8.0", // (Optional) fallback for other dependencies
      },
    ],
  },
};
