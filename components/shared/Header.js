
import React, { useState } from 'react';
import auth0Client from '../../services/auth0';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const BsNavLink = prop => {
  const { title, route } = prop;

  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const Login = () => {
  return (
    <span onClick={auth0Client.login} className="nav-link port-navbar-link clickable" >Login</span>
  );
};
const Logout = () => {
  return (
    <span onClick={auth0Client.logout} className="nav-link port-navbar-link clickable" >Logout</span>
  );
};
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">yohanpro</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blog" title="Blog" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="CV" />
            </NavItem>
            {
              !isAuthenticated &&
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
            }
            {
              isAuthenticated &&
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;