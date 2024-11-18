/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.27",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x077e819540e8f7ff715f9575da0e46c7040c6050890e34c9710ff37b01206e04", // Private key 2
        "0xbbd96b0cc4fdef77eb158f3716f37c569fe2ef24b0d2a4f334fdf9f21beeba55"  // Private key 1
      ],
    },
  },
};
