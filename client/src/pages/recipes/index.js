import React, { Component } from "react";
import API from "../../utils/Api";
import { Row, Col, Card, Button } from "react-materialize";
import TextInput from "../../component/textInput/textInput";
import DrinkCard from "../../component/drinkCard/drinkCard";
import DrinkButton from "../../component/button/button";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      search: "",
      drinkName: [],
      drinkInfo: {},
<<<<<<< HEAD
      drinkRecipe: {},
=======
      drinkIng: {},
      drinkMeasurment: {}
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
    };
  }

  searchRandom = () =>  {
    API.getRandom().then((res) => {
      var ing = [];
      
      console.log(res.data.drinks[0]);
      for (let i = 1; i < 16; i++){
        if (res.data.drinks[0]['strIngredient' + [i]] === null && res.data.drinks[0]['strMeasure' + [i]] === null) {
        }else if (res.data.drinks[0]['strMeasure' + [i]] === null){
          ing.push(res.data.drinks[0]['strIngredient' + [i]]);
        }
        
        else {
          ing.push(res.data.drinks[0]['strMeasure' + [i]]  + " " + res.data.drinks[0]['strIngredient' + [i]]);
          

        }
      }
      console.log(ing);

      this.setState({ ...this.state, drinkInfo: res.data.drinks[0], drinkIng: ing });
      
    })
    .catch((err) => console.log(err));
  };           
  searchIngredients = (query) => {
    API.getIngs(query)
      .then((res) => {
        const data = res.data.drinks;

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
        var ing = [];
        
        console.log(res.data.drinks[0]);
<<<<<<< HEAD
        this.setState({
          ...this.state,
          drinkInfo: res.data.drinks[0],
        });
      })
      .catch((err) => console.log(err));
  };
=======
        for (let i = 1; i < 16; i++){
          if (res.data.drinks[0]['strIngredient' + [i]] === null && res.data.drinks[0]['strMeasure' + [i]] === null) {
          }else if (res.data.drinks[0]['strMeasure' + [i]] === null){
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24

          }
          
          else {
            ing.push(res.data.drinks[0]['strMeasure' + [i]] +  " " + res.data.drinks[0]['strIngredient' + [i]]);
            

          }
        }
        console.log(ing);

        this.setState({ ...this.state, drinkInfo: res.data.drinks[0], drinkIng: ing });
        
      })
      .catch((err) => console.log(err));
  };
  
  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      ...this.state,
      search: value,
    });
  };
  handleButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.searchIngredients(event.target.id);
    // console.log(this.children);
  };
  handleRandomButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.searchRandom();
  }
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
<<<<<<< HEAD
                <div
                  id="vodkaInput"
                  className="col s4 m4 l4"
                >
                  <VodkaButton />
=======
                <div  className="col s4 m4 l4">
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Vodka
                  </DrinkButton>
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
                </div>

                <div  className="col s4 m4 l4">
                  <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Rum
                  </DrinkButton>
                </div>

<<<<<<< HEAD
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
=======
                <div  className="col s4 m4 l4">
                  <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Tequila
                  </DrinkButton>
                </div>
              </div>
              <div className="row">
                <div  className="col s4 m4">
                  <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Whiskey
                  </DrinkButton>
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
                </div>

                <div  className="col s4 m4 l4">
                  <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Gin
                  </DrinkButton>
                </div>

<<<<<<< HEAD
                <div
                  id="Non_AlcoholicInput"
                  className="col s4 m4 l4"
                >
                  <NonalcoholicButton />
=======
                <div  className="col s4 m4 l4">
                  <DrinkButton
                    onClick={this.handleRandomButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Random
                  </DrinkButton>
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
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
<<<<<<< HEAD
                recipe={
                  this.state.drinkInfo.strInstructions
                }
=======
                directions={this.state.drinkInfo.strInstructions}
                ing={this.state.drinkIng}
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
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
<<<<<<< HEAD
                <button
                  onClick={() =>
                    this.setState(
                      this.specificDrink(drink.id)
                    )
                  }
                  // value={drink.id}
=======
                <Button
                  flat
                  node="button"
                   waves="light"
                   key={drink.id}
                  onClick={() => this.setState(this.specificDrink(drink.id))}
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
                >
                  {drink.name}

  
                </Button>
                                
                              )
                            })}
                          </Card>
                        </main>
                      </div>
                    );
                  }
                }
export default Recipes;
