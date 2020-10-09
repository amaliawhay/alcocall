import React from "react";
import { Button } from "react-materialize";

function WhiskeyButton() {
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
        Whiskey
      </Button>
    </div>
  );
}

export default WhiskeyButton;
