import React, { useState } from "react";
// import { debounce, truncStr } from "../src/utils";
import { useInterval } from "../src/hooks";

const other = () => {
  // let a = 0;
  // const debounced = debounce(() => {
  //   console.log(a++);
  // }, 200);
  // debounced();
  // debounced();
  // debounced();

  // setTimeout(() => {
  //   console.log("timeout 1");
  //   debounced();
  // }, 250);
  // setTimeout(() => {
  //   console.log("timeout 2");
  //   debounced();
  // }, 500);
  // setTimeout(() => {
  //   console.log("timeout 3");
  //   debounced();
  // }, 750);

  // console.log(truncStr(null));
  // console.log(truncStr(undefined));
  // console.log(truncStr({}));
  // console.log(truncStr("", []));
  // console.log(truncStr(250, ""));
  // console.log(truncStr("", {}));
  // console.log(truncStr({}, 250));
  // console.log(
  //   truncStr(
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque praesentium porro, vitae at tenetur cum enim expedita. Odio vero quia quisquam corrupti delectus facere sed pariatur fugiat fuga ipsam provident iste sint ullam a officia non dolore totam hic accusamus, inventore cum aliquam laudantium aperiam ad. Possimus cum excepturi qui harum ab repellat natus maiores libero vel quaerat laborum praesentium aperiam iusto reiciendis aliquid, itaque veniam a optio. Molestias voluptatem tenetur facilis fuga itaque architecto voluptate laboriosam saepe temporibus vel numquam, consequuntur nemo voluptatum ratione exercitationem, repellendus tempore quasi ipsum. In nisi harum voluptas, molestias eaque officiis deleniti dolores!",
  //     250
  //   )
  // );

  const [count, setCount] = useState(1);
  const [interval, setInterval] = useState(1000);

  useInterval(() => setCount(s => s + 1), interval);

  return (
    <div>
      <button onClick={() => setInterval(s => s + 1000)}>Increase</button>
      <button onClick={() => setInterval(s => s - 1000)}>Decrease</button>
      <div>interval: {interval}</div>
      <div>count: {count}</div>
    </div>
  );
};

export default other;
