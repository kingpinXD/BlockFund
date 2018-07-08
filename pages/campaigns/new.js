import React, { Component } from "react";
import Input_currency from "../../components/input_currency";
import Layout from "../../components/layout";
import factory from "../../ethereum/factory";
import { Router } from "../../routes";

class Campaignnew extends Component {
  handleCallback = async (contribution, account) => {
    return await factory.methods.createCampaign(contribution).send({
      from: account
    });
  };
  handleRedirect = () => {
    Router.pushRoute("/");
  };
  render() {
    return (
      <Layout>
        <Input_currency
          callback={this.handleCallback}
          label="Create Campaign"
          redirect={this.handleRedirect}
        />
      </Layout>
    );
  }
}

export default Campaignnew;
