import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../src/hooks/index";

// import random from "lodash/random";
// console.log(random(10));

const classes = {
  div: {
    height: "100vh",
    width: "100vw"
  }
};

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "red",
  "green",
  "blue",
  "yellow",
  "purple"
];

const observers = () => {
  const [count, setCount] = useState([1, 2, 3]);
  const [elements, setElements] = useState([]);

  const { error, observer } = useIntersectionObserver({
    elements,
    options: { rootMargin: "0px 0px 0px 0px" },
    callback: (entry, self) => {
      console.log("observers -> self", self);
      console.log("observers -> entry", entry);
    }
  });

  useEffect(() => {
    console.log("observers -> n", count.length);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-observe]");
    nodes && setElements(nodes);
    console.log("observers -> nodes", nodes);
  }, [count]);

  const addCount = () => {
    setCount(state => {
      state.push(state.length);
      return [...state];
    });
  };

  const removeCount = () => {
    setCount(state => {
      state.pop();
      return [...state];
    });
  };

  return (
    <div>
      <h3>{error}</h3>

      <button
        style={{ position: "fixed", top: "20px", left: "20px" }}
        onClick={() => addCount()}
      >
        Add
      </button>
      <button
        style={{ position: "fixed", top: "50px", left: "20px" }}
        onClick={() => removeCount()}
      >
        Remove
      </button>

      {count.map(i => (
        <div
          key={i}
          data-observe
          style={{ ...classes.div, background: colors[i] }}
        ></div>
      ))}
    </div>
  );
};

export default observers;
