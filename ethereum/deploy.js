const compiledFactory = require("./build/CampaignFactory");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const provider = new HDWalletProvider(
  "summer gap crisp surround forward basket escape coconut vehicle gesture check about",
  "https://rinkeby.infura.io/EmfxnxUmTTkeiYUeq4x4"
);
//changed mnemonic ="time bonus lava body melody cotton switch buyer empower bone give lesson"
const web3 = new Web3(provider);

let lottery;
const Deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const campaign = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });
  campaign.setProvider(provider);

  console.log(campaign.options.address);
  //0x493D86e2D0c7518eb56C729C32916d8f3DB39638
  //2nd deployment 0x21308F004B113D5FC6CFB2fF034815aa01A4a839
  //Third Deployment 0xaFd165BB5Fd4c27eE4F5cc1D2B4e84E6f9EE6Aa5
};

Deploy();
