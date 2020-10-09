import React from "react";
import { Button } from "react-materialize";

function nonalcoholicButton() {
  return (
    <div>
      <Button
        className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons"
        node="button"
        style={{
          marginRight: "5px"
        }}
        waves="light"
      >
        Non-Alcoholic
      </Button>
    </div>
  );
}

export default nonalcoholicButton;
