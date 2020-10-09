import React, { Component } from "react";
import API from "../../utils/Api";
import { Row, Col, Card } from "react-materialize";
import TextInput from "../../component/textInput/textInput";
import VodkaButton from "../../component/vodkaButton/vodkaButton";
import DrinkCard from "../../component/drinkCard/drinkCard";
import Button from "../../component/button/button";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      search: "",
      drinkName: [],
      drinkInfo: {},
      drinkRecipe: {}
    };
  }

  // componentDidMount() {
  //   this.searchIngredients("lemon");
  // }
  searchIngredients = (query) => {
    API.getIngs(query)
      .then((res) => {
        const data = res.data.drinks;

        this.setState({ ...this.state, result: data });
        const tempDrinkName = [];
        for (var i = 0; i < data.length; i++) {
          tempDrinkName.push({ name: data[i].strDrink, id: data[i].idDrink });
        }
        // return tempDrinkName;
        this.setState({ ...this.state, drinkName: tempDrinkName });
      })
      .catch((err) => console.log(err));
  };
  specificDrink = (query) => {
    API.getId(query)
      .then((res) => {
        console.log(res.data.drinks[0]);
        this.setState({ ...this.state, drinkInfo: res.data.drinks[0] });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      ...this.state,
      search: value
    });
  };
  handleButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.searchIngredients(event.target.id);
    // console.log(this.children);
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchIngredients(this.state.search);
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
                <div id="vodkaInput" className="col s4 m4 l4">
                  <VodkaButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Vodka
                  </VodkaButton>
                </div>

                <div id="rumInput" className="col s4 m4 l4">
                  <Button
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Rum
                  </Button>
                </div>

                <div id="tequilaInput" className="col s4 m4 l4">
                  <Button
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Tequila
                  </Button>
                </div>
              </div>
              <div className="row">
                <div id="whiskeyInput" className="col s4 m4">
                  <Button
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Whiskey
                  </Button>
                </div>

                <div id="ginInput" className="col s4 m4 l4">
                  <Button
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Gin
                  </Button>
                </div>

                <div id="Non_AlcoholicInput" className="col s4 m4 l4">
                  <Button
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Non-Alcoholic
                  </Button>
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
                recipe={this.state.drinkInfo.strIngredient1}
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
                  key={drink.id}
                  onClick={() => this.setState(this.specificDrink(drink.id))}
                >
                  {drink.name}
                </button>
              );
            })}
          </Card>
        </main>
      </div>
    );
  }
}
export default Recipes;
