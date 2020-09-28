import React from "react";
import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <ul className="sidenav white darken-2" id="mobile-links">
        <li>
          <Link to="index">Home</Link>
        </li>
        <li>
          <Link to="liquor_search">Recipes</Link>
        </li>
        <li>
          <Link to="bars">Bars</Link>
        </li>
        <li>
          <Link to="beerSearch">Breweries</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>

      <div className="carousel-containter">
        <div className="carousel carousel-slider">
          <Link className="carousel-item" to="#one!">
            <img
              src="/assets/images/main_image_slider.png"
              className="responsive-img"
              alt="slider"
            />
          </Link>
          <Link className="carousel-item" to="#two!">
            <img src="/assets/images/main_image_slider-2.jpg" alt="slider" />
          </Link>
          <Link className="carousel-item" to="#three!">
            <img src="/assets/images/main_image_slider-3.jpg" alt="slider" />
          </Link>
        </div>
      </div>

      <main className="wide-container container">
        <div className="row">
          <div className="col s12">
            <section className="main-text-section">
              <h5
                className="center-align light-blue-text text-darken-1"
                style={{ fontFamily: "BenchNine, serif" }}
              >
                USE WHAT YOU'VE GOT!
              </h5>
              <p
                className="flow-text center-align"
                style={{ fontFamily: "BenchNine, serif" }}
              >
                Tired of your 'Usual?'
              </p>
              <p
                className="flow-text center-align"
                style={{ fontFamily: "BenchNine, serif" }}
              >
                Need a new watering hole or dive bar to get sloshed?
              </p>
              <p
                className="flow-text center-align"
                style={{ fontFamily: "BenchNine, serif" }}
              >
                Really need to find the hippest new craft brewery for your next
                Tinder date?
              </p>
              <p
                className="flow-text center-align"
                style={{ fontFamily: "BenchNine, serif" }}
              >
                DID YOU GET YOU TINDER DATE HOME FOR A NIGHTCAP AND NOW YOU
                DON'T KNOW WHAT TO DO???
              </p>
              <p
                className="flow-text center-align"
                style={{ fontFamily: "BenchNine, serif" }}
              >
                We got you.
              </p>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l4">
            <div className="card">
              <div className="card-image">
                <img
                  src="/assets/images/sal-gh-BV5YkMpFlj4-unsplash.jpg"
                  alt="Flight of craft beers"
                />
                <Link
                  to=""
                  className="halfway-fab btn-floating light-blue darken-1 pulse"
                >
                  <i className="large material-icons">local_drink</i>
                </Link>
              </div>
              <div className="card-content">
                <span className="card-title light-blue-text text-darken-1">
                  Brewery Search
                </span>
                <p>
                  Craft Breweries are a trend to some, and a lifestyle for
                  others. Find all your local breweries and tasting rooms for
                  the next time you need a local hazy, juicy, double IPA.
                </p>
              </div>
              <div className="card-action center-align">
                <Link className="btn light-blue darken-1" to="beerSearch">
                  Find a local brewery
                </Link>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="card">
              <div className="card-image">
                <img
                  src="/assets/images/jenna-bollweg-5Ufq_E6PCz0-unsplash.jpg"
                  alt="Mai Tai mixed drink"
                />
                <Link
                  to=""
                  className="halfway-fab btn-floating light-blue darken-1 pulse"
                >
                  <i className="material-icons">whatshot</i>
                </Link>
              </div>
              <div className="card-content">
                <span className="card-title light-blue-text text-darken-1">
                  Random Drink
                </span>
                <p>Not sure what you want to drink? Take a chance on me!</p>
              </div>
              <div className="card-action center-align">
                <Link className="btn light-blue darken-1" to="random">
                  Surprise Me!
                </Link>
              </div>
            </div>
          </div>
          <div className="col s12 l4">
            <div className="card">
              <div className="card-image">
                <img
                  src="/assets/images/ergita-sela-h1tb2E1f3u4-unsplash.jpg"
                  alt="Bartender mixing cosmopolitans"
                />
                <Link
                  to=""
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
