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
            <div className="col l6 s12">
              <h5 className="light-blue-text text-darken-1">
                The Coding Commanders
              </h5>
              <ul>
                <li>
                  <Link className="footer-a" to="https://github.com/amaliawhay" alt="Home">
                    Amalia Hay
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="https://github.com/imartinez0753" alt="Recipes">
                    Ian Martinez
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="https://github.com/KarazKOS" alt="Bar Search">
                    Yulin Karaiscos
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="https://github.com/Darling-bee" alt="Bar Search">
                    Brianne Tengwall
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="light-blue-text text-darken-1">Links</h5>
              <ul>
                <li>
                  <Link className="footer-a" to="index" alt="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="recipes" alt="Recipes">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="bars" alt="Bar Search">
                    Bars
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="breweries" alt="Brewery Search">
                    Breweries
                  </Link>
                </li>
                <li>
                  <Link className="footer-a" to="references" alt="Resources">
                    Resources
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
