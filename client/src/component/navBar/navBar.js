import React from "react";
import { Link } from "react-router-dom";
import { Icon, Navbar, NavItem } from "react-materialize";

function Navbar1() {
  return (
    <div>
      <Navbar
        className="nav-wrapper black darken-1 z-depth-2 nav-bar"
        alignLinks="right"
        brand={
          <Link to="index" className="">
            <img
              className="brand-logo"
              src="/assets/images/alcocall_logo-blue_sm.png"
              alt="Alcocall Logo"
            />
          </Link>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem href="recipes">Recipes</NavItem>
        <NavItem href="breweries">Breweries</NavItem>
        <NavItem href="bars">Bars</NavItem>
      </Navbar>
    </div>
  );
}

export default Navbar1;
