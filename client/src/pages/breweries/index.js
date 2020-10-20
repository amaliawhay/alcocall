import React from "react";

function breweries() {
  return (
    <main className="container main-content">
     <div className="col s12 l6">
      <div className="card card-content">
        <h4 className="brewery-header card-content light-blue-text text-darken-1">Enter a city name to find the closest brewery near you.</h4>
          <form className="row card-content">
           <div className="input-field col s12 l9">
            <input id="firstName" class="validate" placeholder="City Name" type="text"></input>
            <label className="active label-city" htmlFor="city_name">
              City Name
            </label>
            </div>
          </form>
          <div className="card-action center-align">
          <a id="button" class="btn light-blue darken-1 card-buttons">Find Local Beer!</a>
          </div>
          <div id="brewery"></div>
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
export default breweries;
