import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "../routes";

class Header extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Link route="/">
          <Menu.Item
            name="BlockFund"
            active={activeItem === "BlockFund"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Menu.Menu position="right">
          <Link route="/">
            <Menu.Item
              name="Campaigns"
              active={activeItem === "Campaigns"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link route="/campaigns/new">
            <Menu.Item
              name="Add"
              active={activeItem === "Add"}
              onClick={this.handleItemClick}
            >
              <Icon name="add circle" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
