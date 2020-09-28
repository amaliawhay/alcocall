import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "react-materialize";

function Navbar() {
  return (
    <nav className="nav-wrapper black darken-1 z-depth-2 nav-bar">
      <div className="container">
        <Link to="index" className="">
          <img
            className="brand-logo"
            src="/assets/images/alcocall_logo-blue_sm.png"
            alt="Alcocall Logo"
          />
        </Link>
        <Link to="#" className="sidenav-trigger" data-target="mobile-links">
          <i className="material-icons">menu</i>
        </Link>
        <ul
          className="right hide-on-med-and-down"
          // style="font-family: BenchNine, sans-serif;"
          style={{ fontFamily: "BenchNine, sansSerif" }}
        >
          <li>
            <Link to="recipes" className="btn:hover">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="bars">Bars</Link>
          </li>
          <li>
            <Link to="breweries">Breweries</Link>
          </li>
          <li>
            <Link
              to=""
              className="btn-floating light-blue darken-1 zed-depth-0"
              alt="Login"
            >
              <i className="material-icons">person</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
