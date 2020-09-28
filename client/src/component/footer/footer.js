import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div>
      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="light-blue-text text-darken-1">
                The Alcocall App
              </h5>
              <p className="grey-text text-lighten-4">
                Your virtual bartender.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="light-blue-text text-darken-1">Links</h5>
              <ul>
                <li>
                  <Link className="footer-a" to="index">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="recipes" alt="">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="bars">
                    Bars
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="breweries">
                    Breweries
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="referneces">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="/">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <p className="footer-copyright grey-text text-darken-2">
              ©2020, All rights reserved: Alcocall app by The Coding Commanders
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
