import Web3 from "web3";
let web3;
let provider;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
  provider = window.web3.currentProvider;
} else {
  provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/EmfxnxUmTTkeiYUeq4x4"
  );
  web3 = new Web3(provider);
}

export { web3, provider };
