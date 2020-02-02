
import React, { useState } from 'react';
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
      <a className="nav-link">{title}</a>
    </Link>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">yohanpro</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/blog" title="Blog" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/cv" title="CV" />
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;