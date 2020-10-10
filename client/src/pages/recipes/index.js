import React, { Component } from "react";
import API from "../../utils/Api";
import { Row, Col, Card } from "react-materialize";
import TextInput from "../../component/textInput/textInput";
import NonalcoholicButton from "../../component/nonalcoholicButton/nonalcoholicButton";
import RumButton from "../../component/rumButton/rumButton";
import TequillaButton from "../../component/tequillaButton/tequillaButton";
import WhiskeyButton from "../../component/whiskeyButton/whiskeyButton";
import VodkaButton from "../../component/vodkaButton/vodkaButton";
import GinButton from "../../component/ginButton/ginButton";
import DrinkCard from "../../component/drinkCard/drinkCard";

class recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      search: "",
      drinkName: [],
      drinkInfo: {},
      drinkRecipe: {},
    };
  }

  // componentDidMount() {
  //   this.searchIngredients("lemon");
  // }
  searchIngredients = (query) => {
    API.getIngs(query)
      .then((res) => {
        const data = res.data.drinks;
        console.log(data);
        this.setState({ ...this.state, result: data });
        const tempDrinkName = [];
        for (var i = 0; i < data.length; i++) {
          tempDrinkName.push({
            name: data[i].strDrink,
            id: data[i].idDrink,
          });
        }
        // return tempDrinkName;
        this.setState({
          ...this.state,
          drinkName: tempDrinkName,
        });
      })
      .catch((err) => console.log(err));
  };
  specificDrink = (query) => {
    API.getId(query)
      .then((res) => {
        console.log(res.data.drinks[0]);
        this.setState({
          ...this.state,
          drinkInfo: res.data.drinks[0],
        });
      })
      .catch((err) => console.log(err));
  };

  getRecipe = (query) => {
    API.getRecipe(query)
      .then((res) => {
        console.log(res);
        const data = res.data.drinks;
        console.log(data);
        this.setState({ ...this.state, drinkRecipe: data });
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const value = event.target.value;

    console.log(event.target);
    this.setState({
      ...this.state,
      search: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchIngredients(this.state.search);
    console.log(event.target.value);
  };
  handleButtonClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <main className="container main-content">
          <div className="row">
            <div className="row container">
              <h5 className="light-blue-text text-darken-1">
                Select a Spirit!
              </h5>
              <div className="row drink-wrapper">
                <div
                  id="vodkaInput"
                  className="col s4 m4 l4"
                >
                  <VodkaButton />
                </div>

                <div id="rumInput" className="col s4 m4 l4">
                  <RumButton />
                </div>

                <div
                  id="tequilaInput"
                  className="col s4 m4 l4"
                >
                  <TequillaButton />
                </div>
              </div>
              <div className="row">
                <div
                  id="whiskeyInput"
                  className="col s4 m4"
                >
                  <WhiskeyButton />
                </div>

                <div id="ginInput" className="col s4 m4 l4">
                  <GinButton />
                </div>

                <div
                  id="Non_AlcoholicInput"
                  className="col s4 m4 l4"
                >
                  <NonalcoholicButton />
                </div>
              </div>
            </div>
            <Row>
              <Col>
                <TextInput
                  className="center-align"
                  s={12}
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Col>
            </Row>
            {this.state.drinkInfo.strDrink ? (
              <DrinkCard
                recipe={
                  this.state.drinkInfo.strInstructions
                }
                image={this.state.drinkInfo.strDrinkThumb}
                title={this.state.drinkInfo.strDrink}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
          <Card s={12}>
            {this.state.drinkName.map((drink) => {
              return (
                <button
                  onClick={() =>
                    this.setState(
                      this.specificDrink(drink.id)
                    )
                  }
                  // value={drink.id}
                >
                  {drink.name}
                </button>
              );
            })}
            {/* <p>{this.state.drinkName || "search for ingredient"}</p> */}
          </Card>
          {/* <div id="alcoholDisplay" className="col s10 m6 16"></div>
          <div class="row">
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
          </div> */}
        </main>
      </div>
      //       <div>
      //         <div>
      //           <div
      //             heading={this.state.result || "Search for an ingredient to Begin"}
      //           >
      //             {this.state.result ? (
      //               <div title={this.state.result} />
      //             ) : (
      //               <h3>No Results to Display</h3>
      //             )}
      //           </div>

      //           <div heading="Search for ingredients">
      //             <SearchForm
      //               value={this.state.search}
      //               handleInputChange={this.handleInputChange}
      //               handleFormSubmit={this.handleFormSubmit}
      //             />
      //           </div>
      //         </div>
      //       </div>
    );
  }
  // }

  // function recipes() {
  //   return (
  //     <div>
  //       <main className="container main-content">
  //         <div className="row">
  //           <div className="row container">
  //             <h5 className="light-blue-text text-darken-1">Select a Spirit!</h5>
  //             <div className="row drink-wrapper">
  //               <div id="vodkaInput" className="col s4 m4 l4">
  //                 <VodkaButton />
  //               </div>

  //               <div id="rumInput" className="col s4 m4 l4">
  //                 <RumButton />
  //               </div>

  //               <div id="tequilaInput" className="col s4 m4 l4">
  //                 <TequillaButton />
  //               </div>
  //             </div>
  //             <div className="row">
  //               <div id="whiskeyInput" className="col s4 m4">
  //                 <WhiskeyButton />
  //               </div>

  //               <div id="ginInput" className="col s4 m4 l4">
  //                 <GinButton />
  //               </div>

  //               <div id="Non_AlcoholicInput" className="col s4 m4 l4">
  //                 <NonalcoholicButton />
  //               </div>
  //             </div>
  //           </div>
  //           <Collapsible />
  //           <TextInput
  //           // value={this.state.search}
  //           // handleInputChange={this.handleInputChange}
  //           // handleFormSubmit={this.handleFormSubmit}
  //           />
  //           <DrinkCard />
  //           {/* <div className="row container">
  //             <div className="col s10 m6 l6">
  //               <h5 className="light-blue-text text-darken-1">Select a Drink</h5>
  //               <div className="row"></div>
  //               <div></div>
  //             </div>
  //           </div> */}
  //         </div>
  //       </main>
  //     </div>
  //   );
}
export default recipes;
