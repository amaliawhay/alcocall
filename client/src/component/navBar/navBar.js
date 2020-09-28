import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
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
            <Link to="liquor_search" className="btn:hover">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="random">Random Drink</Link>
          </li>
          <li>
            <Link to="bars">Bars</Link>
          </li>
          <li>
            <Link to="beerSearch">Breweries</Link>
          </li>
          <li>
            <Link
              to="signIn"
              className="btn-floating light-blue darken-1 zed-depth-0"
              alt="Login"
            >
              <i className="material-icons">person</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className="nav-wrapper black darken-1">
    //   <div className="container">
    //     <Link to="/index" className="">
    //       <img
    //         className="brand-logo"
    //         src="/assets/images/alcocall_logo-blue_sm.png"
    //         alt="Alcocall logo"
    //       ></img>
    //     </Link>
    //     <Link to="#" className="sidenav-trigger" data-target="mobile-links">
    //       <i className="material-icons">menu</i>
    //     </Link>
    //   </div>
    //   <Link className="navbar-brand" to="/index">
    //     Home
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           to="/"
    //           className={
    //             window.location.pathname === "/" ||
    //             window.location.pathname === "/signin"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           signin
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/home"
    //           className={
    //             window.location.pathname === "/home"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/bars"
    //           className={
    //             window.location.pathname === "/bars"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           Bars
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/recipes"
    //           className={
    //             window.location.pathname === "/recipes"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           Recipes
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/breweries"
    //           className={
    //             window.location.pathname === "/breweries"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           breweries
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
