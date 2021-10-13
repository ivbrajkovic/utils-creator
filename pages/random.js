import React from "react";
import { random, randomIntFast } from "../src/utils";

function genRandom(func, args) {
  let a = [];
  for (let i = 0; i < 100000; i++) a.push(func(...args));

  return a;
}

function test() {
  let func = random;
  // let func = randomIntFast;

  for (let i = 0; i < 10; i++) {
    {
      console.time("time");
      genRandom(func, [1, 1000]);
      console.timeEnd("time");
    }
  }
}

const Random = () => {
  return <button onClick={test}>test</button>;
};

export default Random;
