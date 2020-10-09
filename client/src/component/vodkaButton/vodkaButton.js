import React from "react";
import { Button } from "react-materialize";

function VodkaButton({ type = "default", className, children, onClick }) {
  return (
    <Button
      onClick={onClick}
      id={children}
      className={[
        "btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons",
        `btn-${type}`,
        className
      ].join(" ")}
      node="button"
      style={{
        marginRight: "5px"
      }}
      waves="light"
    >
      {children}
    </Button>
  );
}

export default VodkaButton;
