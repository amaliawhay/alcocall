import React, { Component } from "react";
import "./App.css";
import {
  Modal,
  Button,
  Navbar,
  Icons,
  Dropdown,
  Grid
} from "react-materialize";

const trigger = <Button>Open Modal</Button>;

export default () => (
  <div>
    <Modal header="Modal Header" trigger={trigger}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Modal>
    <Navbar className="nav-wrapper black darken-1 z-depth-2 nav-bar">
      <div className="container">
        <a href="index" className="">
          <img
            className="brand-logo"
            src="/assets/images/alcocall_logo-blue_sm.png"
            alt="Alcocall Logo"
          />
        </a>
        <a href="#" className="sidenav-trigger" data-target="mobile-links">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="liquor_search" className="btn:hover">
              Recipes
            </a>
          </li>
          <li>
            <a href="random">Random Drink</a>
          </li>
          <li>
            <a href="bars">Bars</a>
          </li>
          <li>
            <a href="beerSearch">Breweries</a>
          </li>
          <li>
            <a
              href="signIn"
              className="btn-floating light-blue darken-1 zed-depth-0"
              alt="Login"
            >
              <i className="material-icons">person</i>
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  </div>
);
