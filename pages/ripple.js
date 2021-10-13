import React, { useRef } from "react";
import { useRippleEffect } from "../src/hooks";

const classes = {
  btn: {
    marginBottom: "16px",
    display: "block",
    position: "relative",
    overflow: "hidden",
    transition: "background 400ms",
    color: "#fff",
    backgroundColor: "#6200ee",
    padding: "1rem 2rem",
    fontSize: "1.5rem",
    outline: "0",
    border: "0",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
    cursor: "pointer"
  }
};

const Ripple = () => {
  const btnRef = useRef([]);
  useRippleEffect(btnRef.current);
  return (
    <div>
      <button ref={el => btnRef.current.push(el)} style={classes.btn}>
        Click me
      </button>
    </div>
  );
};

export default Ripple;
