import React, { useEffect, useRef } from "react";
// import useState2 from "../src/hooks/src/useState2.ts";
// import { useState2 } from "../src/hooks";
import { useState2 } from "hooks";

const other = () => {
  const c = useRef(0);
  const [state, setState] = useState2({ name: "Ivan", lastName: "Brajković" });

  useEffect(() => {
    c.current += 1;
  });

  return (
    <div>
      <button
        onClick={() => {
          const newState = { name: "Ivan", lastName: "Brajković" };
          setState(newState, ["name"]);
        }}
      >
        Increase
      </button>
      <button onClick={() => {}}>Decrease</button>
      <div>count: {c.current}</div>
      <div>{JSON.stringify(state, null, 2)}</div>
    </div>
  );
};

export default other;
