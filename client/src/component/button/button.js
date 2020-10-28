import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element

function DrinkButton({ type = "default", className, children, onClick }) {
  return (
    <button
      id={children}
      onClick={onClick}
      className={[
        "btn light-blue darken-1 btn:hover drink-wrapper-buttons",
        `btn-${type}`,
        className
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default DrinkButton;

