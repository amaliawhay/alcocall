import React, { Component } from "react";
import API from "../../utils/Api";
import SearchForm from "../../component/searchForm/searchForm";
import TextInput from "../../component/textInput/textInput";
import Collapsible from "../../component/collapsible/collapsible";
import NonalcoholicButton from "../../component/nonalcoholicButton/nonalcoholicButton";
import RumButton from "../../component/rumButton/rumButton";
import TequillaButton from "../../component/tequillaButton/tequillaButton";
import WhiskeyButton from "../../component/whiskeyButton/whiskeyButton";
import VodkaButton from "../../component/vodkaButton/vodkaButton";
import GinButton from "../../component/ginButton/ginButton";
import DrinkCard from "../../component/drinkCard/drinkCard";

class recipes extends Component {
  state = {
    result: {},
    search: ""
  };
  //   componentDidMount() {
  //     this.searchIngredients("lemon");
  //   }
  searchIngredients = (query) => {
    API.getIngs(query)
      .then((res) => {
        // console.log(res.data.drinks);
        this.setState({ result: res.data.drinks });
        console.log(this.state.result);
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
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
                  <VodkaButton />
                </div>

                <div id="rumInput" className="col s4 m4 l4">
                  <RumButton />
                </div>

                <div id="tequilaInput" className="col s4 m4 l4">
                  <TequillaButton />
                </div>
              </div>
              <div className="row">
                <div id="whiskeyInput" className="col s4 m4">
                  <WhiskeyButton />
                </div>

                <div id="ginInput" className="col s4 m4 l4">
                  <GinButton />
                </div>

                <div id="Non_AlcoholicInput" className="col s4 m4 l4">
                  <NonalcoholicButton />
                </div>
              </div>
            </div>
            {/* <Collapsible />
            <TextInput />
            <DrinkCard /> */}
          </div>
          <div id="alcoholDisplay" className="col s10 m6 16"></div>
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
          </div>
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
