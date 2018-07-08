import React, { Component } from "react";
import getcampaign from "../../../ethereum/campaign";
import { Button, Input, Grid, Table } from "semantic-ui-react";
import Layout from "../../../components/layout";
import { Router, Link } from "../../../routes";
import TableRow from "../../../components/tablerow";

class viewrequests extends Component {
  static async getInitialProps(props) {
    const campaign = getcampaign(props.query.address);
    const no_of_requests = await campaign.methods.getRequestCount().call();
    const total_approvers = await campaign.methods.approversCount().call();
    let requests = [];
    if (no_of_requests > 0) {
      requests = await Promise.all(
        Array(parseInt(no_of_requests))
          .fill()
          .map((element, index) => {
            return campaign.methods.requests(index).call();
          })
      );
    }

    return {
      current_campaign_address: props.query.address,
      campaign,
      requests,
      total_approvers,
      no_of_requests
    };
  }
  renderTableRows = () => {
    return this.props.requests.map((request, index) => {
      return (
        <TableRow
          request={request}
          id={index}
          key={index}
          approvers={this.props.total_approvers}
          current_campaign_address={this.props.current_campaign_address}
        />
      );
    });
  };

  render() {
    return (
      <Layout>
        <div>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
                <Table.HeaderCell>Recepient</Table.HeaderCell>
                <Table.HeaderCell>No of approvals</Table.HeaderCell>
                <Table.HeaderCell>Approve</Table.HeaderCell>
                <Table.HeaderCell>Finalise</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderTableRows()}</Table.Body>
          </Table>
          <Link
            route={`/campaigns/${
              this.props.current_campaign_address
            }/addrequest`}
          >
            <Button>Add Request</Button>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default viewrequests;
