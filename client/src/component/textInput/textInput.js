import React from "react";
import { TextInput } from "react-materialize";

function textInput(props) {
  return (
    <div>
      <TextInput
        id="TextInput-4"
        placeholder="Choose Ingredient"
        onChange={props.handleInputChange}
        value={props.value}
      />
      <div>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}
export default textInput;
