import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import getcampaign from "../ethereum/campaign";
import { web3 } from "../ethereum/web3";
import { Router } from "../routes";

class TableRow extends Component {
  handleApprove = async () => {
    const campaign = getcampaign(this.props.current_campaign_address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
    Router.replaceRoute(
      `/campaigns/${this.props.current_campaign_address}/viewrequest`
    );
  };
  handleFinalize = async () => {
    const campaign = getcampaign(this.props.current_campaign_address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalzeRequest(this.props.id).send({
      from: accounts[0]
    });
    Router.replaceRoute(
      `/campaigns/${this.props.current_campaign_address}/viewrequest`
    );
  };
  render() {
    const { id, request, approvers } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{request.description}</Table.Cell>
        <Table.Cell>{request.value}</Table.Cell>
        <Table.Cell>{request.recipients}</Table.Cell>
        <Table.Cell>
          {request.approvalcount}/{approvers}
        </Table.Cell>

        <Table.Cell>
          {request.iscomplete ? null : (
            <Button inverted color="green" onClick={this.handleApprove}>
              Approve
            </Button>
          )}
        </Table.Cell>
        <Table.Cell>
          {request.iscomplete ? null : (
            <Button
              inverted
              color="blue"
              onClick={this.handleFinalize}
              disabled={!(request.approvalcount >= approvers / 2)}
            >
              Finalize
            </Button>
          )}
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default TableRow;
