import React, { Component } from "react";
import getcampaign from "../../../ethereum/campaign";
import { Button, Input, Grid, Form, Message } from "semantic-ui-react";
import Layout from "../../../components/layout";
import { Router, Link } from "../../../routes";
import { web3 } from "../../../ethereum/web3";

class addrequest extends Component {
  static getInitialProps(props) {
    return {
      current_campaign_address: props.query.address
    };
  }
  state = {
    description: "",
    value: "",
    receiver: "",
    errorMessage: "",
    loading: false
  };

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
      errorMessage: ""
    });
  };
  handleSubmit = async () => {
    const { description, value, receiver } = this.state;

    const accounts = await web3.eth.getAccounts();
    const campaign = getcampaign(this.props.current_campaign_address);
    this.setState({ loading: true });
    try {
      const submit = await campaign.methods
        .createRequest(description, parseInt(value), receiver)
        .send({ from: accounts[0] });
      console.log(
        `/campaigns/${this.props.current_campaign_addres}/viewrequest`
      );
      Router.pushRoute(
        `/campaigns/${this.props.current_campaign_addres}/viewrequest`
      );
    } catch (err) {
      this.setState({
        errormessage: err.message
      });
    }
    this.setState({ loading: false });
  };

  render() {
    const { description, value, receiver } = this.state;
    return (
      <Layout>
        <div>
          <Grid>
            <Form
              onSubmit={this.handleSubmit}
              error={!!this.state.errorMessage}
            >
              <Form.Group>
                <Form.Input
                  placeholder="description"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="value in wei"
                  name="value"
                  value={value}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="receiver"
                  name="receiver"
                  value={receiver}
                  onChange={this.handleChange}
                />

                <Message
                  error
                  header="There was some errors with your submission"
                  content={this.state.errormessage}
                />
                <Button type="submit" loading={this.state.loading}>
                  Create Request
                </Button>
              </Form.Group>
            </Form>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default addrequest;
