import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Segment,
  Dropdown,
  Message
} from "semantic-ui-react";

import { web3 } from "../ethereum/web3";

const currencies = ["wei", "ether"];
class Input_currency extends Component {
  state = {
    contribution: "",
    currency: "wei",
    errormessage: "",
    sending: false
  };
  currencyList() {
    return currencies.map(currency => {
      return {
        key: currency,
        text: currency,
        value: currency
      };
    });
  }
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
      errormessage: ""
    });
  };
  handleSubmit = async () => {
    const accounts = await web3.eth.getAccounts();
    let { contribution, currency } = this.state;
    this.setState({
      sending: true
    });
    try {
      contribution = web3.utils.toWei(contribution, currency);

      const submit = await this.props.callback(contribution, accounts[0]);
      this.props.redirect();
    } catch (err) {
      this.setState({
        errormessage: err.message
      });
    }
    this.setState({
      sending: false
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={!!this.state.errormessage}>
        <Form.Field inline>
          <label>Contribution</label>
          <Input
            name="contribution"
            value={this.state.contribution}
            onChange={this.handleChange}
            label={
              <Dropdown
                defaultValue="wei"
                options={this.currencyList()}
                onChange={(e, { value }) => {
                  this.setState({ currency: value });
                }}
              />
            }
            labelPosition="right"
          />
        </Form.Field>
        <Message
          error
          header="There was some errors with your submission"
          content={this.state.errormessage}
        />
        <Button loading={this.state.sending} type="submit">
          {this.props.label}
        </Button>
      </Form>
    );
  }
}

export default Input_currency;
