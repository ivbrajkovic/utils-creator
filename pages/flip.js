import React, { useState } from "react";
// import { useFlipAnimation } from "@ivbrajkovic/react-hooks";
import { useFlipAnimation } from "../src/hooks";

const data = [1, 2, 3, 4];

const invert = ({ delta, elem }) => {
  elem.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
  elem.style.transition = `transform 0s`;
};

const play = elem => {
  elem.style.transform = ``;
  elem.style.transition = `transform 1000ms ease`;
};

const invertAndPlay = ({ delta, elem }) => {
  return elem.animate(
    [
      { transform: `translate(${delta.left}px, ${delta.top}px)` },
      { transform: `none` }
    ],
    { duration: 300 }
  );
};

const List = ({ data, row, isAnimation }) => {
  const listRef = React.createRef();
  useFlipAnimation({ root: listRef, invertAndPlay, enable: isAnimation });

  return (
    <ul
      ref={listRef}
      style={{ flexDirection: row ? "row" : "column" }}
      className='container'
    >
      {data.map(el => (
        <li
          key={el}
          data-key={el}
          style={{ width: !row ? "100%" : "33.333333%" }}
        >
          <div>{el}</div>
        </li>
      ))}
    </ul>
  );
};

export default function flip() {
  const [row, setRow] = useState(true);
  const [isAnimation, setIsAnimation] = useState(true);
  return (
    <>
      <button className='btn' onClick={() => setRow(s => !s)}>
        Click Me
      </button>
      <button
        className='btn'
        style={{ top: 80 }}
        onClick={() => setIsAnimation(s => !s)}
      >
        Toggle animation
      </button>
      <List data={data} row={row} isAnimation={isAnimation} />
    </>
  );
}
