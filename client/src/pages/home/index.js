import React from "react";
import { Link } from "react-router-dom";
import breweryCard from "../../component/breweryCard";
import Jumbo from "../../component/carousel/index";
import Container from "../../component/container/container";
import BreweryCard from "../../component/breweryCard/index";
import RandomCard from "../../component/randomCard/index";

function home() {
  return (
    <div>
      <Jumbo />
      <Container />

      <main className="wide-container container">
        <div className="row">
          <BreweryCard />
          <RandomCard />

          <div className="col s12 l4">
            <div className="card">
              <div className="card-image">
                <img
                  src="/assets/images/ergita-sela-h1tb2E1f3u4-unsplash.jpg"
                  alt="Bartender mixing cosmopolitans"
                />
                <Link
                  to="bars"
                  className="halfway-fab btn-floating light-blue darken-1 pulse"
                >
                  <i className="material-icons">local_bar</i>
                </Link>
              </div>
              <div className="card-content">
                <span className="card-title light-blue-text text-darken-1">
                  Bar Search
                </span>
                <p>
                  Some people prefer to leave the mixing to the professionals.
                  Some people prefer to not drink alone. Those people should
                  click here to find a local expert mixology establishment.
                </p>
              </div>
              <div className="card-action center-align">
                <Link className="btn light-blue darken-1" to="bars">
                  Find me a bartender!
                </Link>
              </div>
            </div>
          </div>
          <div className="wide-container container">
            <div className="row">
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-image">
                    <div className="iframe-container">
                      <iframe
                        className="responsive-iframe"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/mDuAe3Q0zdI"
                        frameBorder="1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <Link
                      to=""
                      className="halfway-fab btn-floating light-blue darken-1 pulse"
                    >
                      <i className="small material-icons">school</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    <span className="card-title light-blue-text text-darken-1">
                      Drink Tutorials
                    </span>
                    <p>
                      Need a few tips on mixing up your favorites? Come learn
                      from the pros in this video on the Basics of Bartending.
                    </p>
                  </div>
                  <div className="card-action center-align">
                    <Link className="btn light-blue darken-1" to="#">
                      View more tutorials
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-image">
                    <div className="iframe-container">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13210.243744101092!2d-117.60827705267576!3d34.13198850193057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c336e687068bcd%3A0x3f6ad32078c50f6!2sHK&#39;s%20Bar%20and%20Grill!5e0!3m2!1sen!2sus!4v1592538250833!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe>
                    </div>
                    <Link
                      to="#"
                      className="halfway-fab btn-floating light-blue darken-1 pulse"
                    >
                      <i className="material-icons">location_on</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    <span className="card-title light-blue-text text-darken-1">
                      Bar Locator
                    </span>
                    <p>
                      Need to get out? Let's find your next stop. Make sure to
                      be safe and call a sober friend or a rideshare.
                    </p>
                  </div>
                  <div className="card-action center-align">
                    <Link
                      className="btn light-blue darken-1 btn:hover"
                      to="bars"
                    >
                      Find a local bar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default home;
