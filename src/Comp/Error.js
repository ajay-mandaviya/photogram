import React from "react";
import "./Error.css";
const Error = ({ setShowError, setClick }) => {
  return (
    <div className="error">
      <div className="error-message">
        <h2>Please Login or Sing up to see Post </h2>
        <button
          onClick={() => {
            setShowError(false)
            setClick(false)
          }}
        >
          Dismiss
        </button>   
      </div>
    </div>
  );
};
export default Error;
