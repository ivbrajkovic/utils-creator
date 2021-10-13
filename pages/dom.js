import React, { useEffect } from "react";
// import {} from "../dist/utils";
// import { getElementEvents } from "../src/utils";

import {} from "../src/utils/index";

const dom = () => {
  useEffect(() => {
    // console.log("All events:\n", getElementEvents("*"));
  }, []);
  return <h3>DOM functions</h3>;
};

export default dom;
