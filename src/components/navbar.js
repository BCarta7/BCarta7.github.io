import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(args) {
  return (
    <div>
      <Navbar {...args} dark fixed="top">
        <NavbarBrand href="#titleNav">Back to top</NavbarBrand>
          <Nav className="flex-row space-x-52 mx-auto" navbar>
            <NavItem>
              <NavLink href="#projectnav">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Example;