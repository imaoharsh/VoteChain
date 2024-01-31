require("@nomicfoundation/hardhat-toolbox");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "61df4deb51ad4384888b026109170c67";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
//     gas: 210000000,
//gasPrice: 800000000000,

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: ["b32110e60c5beb655a33acb3cc73370c3b8ff3c3bdf20c3a08fcb2da69538865"],
      gas: 210000000,
      gasPrice: 800000000000,
    }
  }
};

