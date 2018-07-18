import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import firebase from "firebase"

export default class AutNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Profiel Bewerken</NavLink>
              </NavItem>
              <NavItem>
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}