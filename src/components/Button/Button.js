import React from "react";
import "./Button.css";

function Button({ children, onClick, id }) {
  return (
    <button
      onClick={() => {
        onClick(id);
      }}
      className="button"
    >
      {children}
    </button>
  );
}

export default Button;
