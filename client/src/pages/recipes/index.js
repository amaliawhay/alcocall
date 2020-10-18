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
      drinkIng: {},
      drinkMeasurment: {},
      show: false
    };
  }
searchNonAlcoholic = () => {
  API.getNonAlcohol().then((res) => {
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
        var ing = [];
        
        console.log(res.data.drinks[0]);
        for (let i = 1; i < 16; i++){
          if (res.data.drinks[0]['strIngredient' + [i]] === null && res.data.drinks[0]['strMeasure' + [i]] === null) {
          }else if (res.data.drinks[0]['strMeasure' + [i]] === null){

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
      search: value
    });
  };
  handleButtonClick = (event) => {
    event.preventDefault();
    this.setState({...this.state, show:true})
    console.log(this.state);
    this.searchIngredients(event.target.id);
    // console.log(this.children);
  };
  handleRandomButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.searchRandom();
  }
  handleNonAlcoholicButton = (event) => {
    event.preventDefault();
    this.setState({...this.state, show:true})
    this.searchNonAlcoholic();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({...this.state, show:true})
    this.searchIngredients(this.state.search);
  };

  render() {
    return (
      <div>
        <main className="container main-content">
              <Row>
                <Col className="push-s4 push-m4 push-l4">
                  <h2 className="center-align light-blue-text text-darken-1">Select a Spirit!</h2>
                </Col>
              </Row>
              

              <Row>
                <Col s={12} m={3} l={3}>
                  <img className="bottle-image" src="./assets/images/vodka_bottle.jpg"></img>
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Vodka
                  </DrinkButton>                              
                </Col>
                <Col s={12} m={3} l={3}>
                  <img className="bottle-image responsive-img" src="./assets/images/rum_bottle.jpg"></img>
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Rum
                  </DrinkButton>
                </Col>
                <Col s={12} m={3} l={3}>
                <img className="bottle-image" src="./assets/images/whiskey_bottle.jpg"></img>              
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Whiskey
                  </DrinkButton></Col>
                <Col s={12} m={3} l={3}>
                <img className="bottle-image" src="./assets/images/gin_bottle.jpg"></img>   
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Gin
                  </DrinkButton>
                </Col>

              </Row>
              <Row>
                <Col s={12} m={3} l={3}>
                <img className="bottle-image" src="./assets/images/tequila_bottle.jpg"></img>
                <DrinkButton
                    onClick={(event) => this.handleButtonClick(event)}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Tequila
                  </DrinkButton>
                </Col>
                
                <Col s={12} m={3} l={3}>
                <img className="bottle-image" src="./assets/images/bourbon_bottle.jpg"></img>
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Bourbon
                  </DrinkButton>
                </Col>
                <Col s={12} m={3} l={3}>
                <img className="bottle-image" src="./assets/images/non_alcohol.jpg"></img>
                <DrinkButton
                    onClick={this.handleNonAlcoholicButton}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Non-Alcoholic
                  </DrinkButton>
                </Col>
                <Col s={12} m={3} l={3}>
                <img className="bottle-image" src="./assets/images/random_drink.jpg"></img>
                <DrinkButton
                    onClick={this.handleRandomButtonClick}
                    type="success"
                    className="input-lg recipe-button"
                  >
                    Random Drink
                  </DrinkButton>
                </Col>
              </Row>

              
           
            <Row className="">
              <Col 
              className="left-align push-s3 push-m3 push-l3"
              s={6} m={6} l={6}>
              
                <TextInput 
                className="valign-wrapper"
                  
                  
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={(event) => this.handleFormSubmit(event)}
                />
                
              
              <Button
              className="recipe-button btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons valign-wrapper"
              onClick={(event) => this.handleFormSubmit(event)}
              >
                Search
                </Button>
              </Col>
            </Row>
            
            <Row>
            <Col m={6} s={6} l={6}>  
                  
                  {this.state.show ? (
                  <Card m={6} s={6} l={6}>
                  {this.state.drinkName.map((drink) => {
                  return (
                    <Button
                      flat
                      node="button"
                        waves="light"
                        key={drink.id}
                      onClick={() => this.setState(this.specificDrink(drink.id))}
                    >
                      {drink.name}  
                    </Button>                                
                  )
                  })}
                  </Card>
                  ) : (
                  ""
                  )}
              </Col>
              <Col m={6} s={6} l={6}>
              {this.state.drinkInfo.strDrink ? (
              <DrinkCard s={6} m={6} l={6}
                directions={this.state.drinkInfo.strInstructions}
                ing={this.state.drinkIng}
                image={this.state.drinkInfo.strDrinkThumb}
                title={this.state.drinkInfo.strDrink}
              />
            ) : (
              ""
            )}
              </Col>
                        
            </Row>            
                  
        </main>
      </div>
    );
  }
}
export default Recipes;
