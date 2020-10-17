import React from "react";

function breweries() {
  return (
    <main className="container main-content">
     <div className="col s12 l6">
      <div className="card">
        <h5 className="card-content light-blue-text text-darken-1">Enter a city name to find the closest brewery near you.</h5>
          <form className="row card-content">
           <div className="input-field col s12 l9">
            <input id="firstName" class="validate" placeholder="City Name" type="text"></input>
            <label className="active" htmlFor="city_name">
              City Name
            </label>
            </div>
          </form>
          <a id="button" className="col s8 l3 center btn:hover btn light-blue darken-1">Find Local Beer!
          </a>
          <div id="brewery"></div>
      </div>    
      </div>
    </main>  
  );
}
export default breweries;
