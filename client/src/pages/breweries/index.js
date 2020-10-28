
import API from "../../utils/Api";
import {  Button } from "react-materialize";
import React, { Component } from "react";
import TextInput from "../../component/textInput/textInput";

class breweries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []      
    };
  }
  handleButtonCLick = (event) => {
    event.preventDefault();
    this.findBrewery(this.state.search)
    
  }


 findBrewery = (query) => {
API.getBrewery(query).then((res) => {
console.log(res)
console.log(res.data)
const data = res.data;
this.setState({ ...this.state, results: data });
    console.log(this.state.results)

}).catch((err) => console.log(err));
 }

 handleFormSubmit = (event) => {

  this.findBrewery(this.state.search)
 }

 handleInputChange = (event) => {
  const value = event.target.value;
 console.log(event.target.value)
  this.setState({
    ...this.state,
    search: value
  });
};


 render() {
 return (
   <div>
<main className="container main-content">
    <div className="col s12 l6">
     <div className="card card-content">
       <h4 className="brewery-header card-content light-blue-text text-darken-1">Enter a city name to find the closest brewery near you.</h4>
         <form className="row card-content">
          <div className="input-field col s12 l9">
          <TextInput
               className="valign-wrapper"
                 id="TextInput"
                
                 value={this.state.search}
                 handleInputChange={this.handleInputChange}
                 handleFormSubmit={(event) => this.handleFormSubmit(event)}
                 
               />
           <label className="active label-city" htmlFor="city_name">
             City Name
           </label>
           </div>
         </form>
         <div className="card-action center-align">
         <Button onClick={this.handleButtonCLick} id="button" class="btn light-blue darken-1 card-buttons">Find Local Beer!</Button>
         </div>
         <div id="brewery"></div>
         {this.state.results.map((name) => {
           return(
            <ul>
              <li>
              {name.name}
              </li>           
            </ul>
           )
          })}
         
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

   </div>
   
 );
}
}
export default breweries;
 

