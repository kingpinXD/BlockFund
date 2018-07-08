import { web3, provider } from "./web3";
const CampaignFactory = require("./build/CampaignFactory");

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xaFd165BB5Fd4c27eE4F5cc1D2B4e84E6f9EE6Aa5"
);
instance.setProvider(provider);

export default instance;
