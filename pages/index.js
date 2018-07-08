import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Icon } from "semantic-ui-react";
import Layout from "../components/layout";
import { Link } from "../routes";

class Homepage extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map(campaign => {
      return {
        header: campaign,
        description: (
          <Link route={`/campaigns/${campaign}`}>
            <a> View Campaign </a>
          </Link>
        ),
        fluid: true,
        key: campaign
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          {this.renderCampaigns()}
          <Link route="/campaigns/new">
            <Button attached="bottom">
              <Icon name="add circle" />
              Create Campaign
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Homepage;
