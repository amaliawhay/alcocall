import React, { Component } from "react";

function recipes() {
  return (
    <div>
      <main className="container main-content">
        <div className="row">
          <div className="row container">
            <h5 className="light-blue-text text-darken-1">Select a Spirit!</h5>
            <div className="row drink-wrapper">
              <div id="vodkaInput" className="col s4 m4 l4">
                <button className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons">
                  Vodka
                </button>
              </div>

              <div id="rumInput" className="col s4 m4 l4">
                <button className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons">
                  Rum
                </button>
              </div>

              <div id="tequilaInput" className="col s4 m4 l4">
                <button className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons">
                  Tequila
                </button>
              </div>
            </div>
            <div className="row">
              <div id="whiskeyInput" className="col s4 m4">
                <button className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons">
                  Whiskey
                </button>
              </div>

              <div id="ginInput" className="col s4 m4 l4">
                <button className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons">
                  Gin
                </button>
              </div>

              <div id="Non_AlcoholicInput" className="col s4 m4 l4">
                <button className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons">
                  Non-Alcohol
                </button>
              </div>
            </div>
          </div>
          <div className="row container">
            <div className="col s10 m6 l6">
              <h5 className="light-blue-text text-darken-1">Select a Drink</h5>
              <div className="row">
                <form>
                  <label for="drinkSelect"></label>
                  <div id="alcoholInput">
                    <label id="label"></label>
                    <select id="select" className="browser-default">
                      <option value="" disabled selected>
                        Choose your option
                      </option>
                    </select>
                  </div>
                </form>
              </div>
            </div>

            <div id="alcoholDisplay" className="col s10 m6 16"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default recipes;
