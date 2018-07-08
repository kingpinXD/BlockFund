import React, { Component } from "react";
import getcampaign from "../../ethereum/campaign";
import { Card, Button, Input, Grid } from "semantic-ui-react";
import Layout from "../../components/layout";
import Input_currency from "../../components/input_currency";
import { Router, Link } from "../../routes";

class Showdetails extends Component {
  static async getInitialProps(props) {
    const campaign = getcampaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      balance: summary[0],
      minimum_contribution: summary[1],
      no_of_requests: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      current_campaign_address: props.query.address
    };
  }
  handleRedirect = () => {
    Router.replaceRoute(`/campaigns/${this.props.current_campaign_address}`);
  };
  handleCallback = async (contribution, account) => {
    const campaign = getcampaign(this.props.current_campaign_address);

    return await campaign.methods.contribute().send({
      from: account,
      value: contribution
    });
  };
  renderCards() {
    const items = [
      {
        header: this.props.balance,
        description: "Campaign Balance",
        key: 1
      },
      {
        header: this.props.minimum_contribution,
        description: "Minimum contribution",
        key: 2
      },
      {
        header: this.props.no_of_requests,
        description: "Pending Requests",
        key: 3
      },
      {
        header: this.props.approversCount,
        description: "No of Approvers",
        key: 4
      },
      {
        header: this.props.manager,
        description: "Address of Campaign manager",
        style: { overflowWrap: "break-word" },
        key: 5
      }
    ];
    return <Card.Group items={items} key="cards" />;
  }
  render() {
    return (
      <Layout>
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width="8">{this.renderCards()}</Grid.Column>
              <Grid.Column width="3">
                <Input_currency
                  label="Contribute"
                  callback={this.handleCallback}
                  key="input"
                  redirect={this.handleRedirect}
                />
              </Grid.Column>
            </Grid.Row>
            <Link
              route={`/campaigns/${
                this.props.current_campaign_address
              }/viewrequest`}
            >
              <Button>View Requests</Button>
            </Link>
            <Grid.Row />
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default Showdetails;
