Smart Contract Proxy (Upgradeable)

This project demonstrates how to create and upgrade an Ethereum Smart Contract using the Proxy (Upgradeable) pattern with Hardhat and OpenZeppelin.

Tech Stack

Solidity ^0.8.x

Hardhat

OpenZeppelin Upgradeable Contracts

Node.js / npm

Setup Instructions
# 1. Install dependencies
npm install

# 2. Compile the contracts
npx hardhat compile

# 3. Deploy V1 (proxy + logic)
npx hardhat run scripts/deployV1.js --network localhost

# 4. Upgrade to V2 (new logic)
npx hardhat run scripts/upgradeV2.js --network localhost

# 5. (Optional) Test new features
npx hardhat run scripts/testV2.js --network localhost

Concept

This project uses the ERC1967 Proxy pattern which separates:

Proxy Contract → stores state (data)

Logic Contract (V1 / V2) → contains business logic

When upgrading, only the logic contract changes — the state remains safe.

Folder Structure
contracts/
  ├── MyContractV1.sol
  └── MyContractV2.sol
scripts/
  ├── deployV1.js
  ├── upgradeV2.js
  └── testV2.js
hardhat.config.js

Example Output
Deploying MyContractV1...
MyContractV1 deployed to proxy address: 0xe7f1...

Upgrading contract to V2...
Contract upgraded! Still at proxy address: 0xe7f1...

Author

Ritik Verma
Blockchain Developer
Built using Hardhat and OpenZeppelin Upgradeable Proxy.