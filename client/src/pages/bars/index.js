import React from "react";

function bars() {
  return (
    <main className="container main-content">
      <div className="col s12 l6">
        <div className="card">
          <div className="card-image">
            {/* Google Maps API Embedded */}
            <iframe src="https://www.google.com/maps/embed/v1/search?q=bars%20near%20me&amp;key=AIzaSyAO-aBYWPDQ12tw7JzsIlrdQk8ZDIcuWho" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" height="400px" frameborder="0"></iframe>
            <a className="halfway-fab btn-floating light-blue darken-1 pulse" href="">
              <i className="material-icons">location_on</i>
            </a>
          </div>
          <div className="card-content">
            <h4 className="center-align h4 light-blue-text text-darken-1">Bar Locater</h4>
            <p className="center-align">Get Bar Hopping!</p>
          </div>
          <div className="card-action center-align">
          <a class="btn light-blue darken-1 card-buttons" href="https://www.google.com/search?q=bars+near+me&amp;oq=bars+near+me&amp;aqs=chrome..69i57.1608j0j7&amp;sourceid=chrome&amp;ie=UTF-8">Find a local bar</a>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="center-align light-blue-text text-darken-1">Please Drink Responsibly!</h4>
        <p className="center-align">
          Have you already started drinking? Call a rideshare app or a friend to
          take you on the next journey of your adventure!
        </p>
      </div>
    </main>  
  );
}
export default bars;
