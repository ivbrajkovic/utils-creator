import React, { useState, useEffect } from "react";
import { fetchTextAsync, fetchJsonAbortCb } from "../src/utils/dist";

const index = () => {
  const [state, setState] = useState({ data: "", error: "" });

  useEffect(() => {
    (() => {
      fetchJsonAbortCb(
        "https://api.chucknorris.io/jokes/random",
        (error, data) => {
          console.log("index -> error", error);
          console.log("index -> data", data);

          if (error) setState({ error });
          else setState({ data });
        }
      );
    })();

    // (async () => {
    //   try {
    //     const data = await fetchTextAsync(
    //       "https://api.chucknorris.io/jokes/random"
    //     );
    //     setState({ data: JSON.parse(data) });
    //   } catch (error) {
    //     setState({ error });
    //   }
    // })();
  }, []);

  const { data, error } = state;
  return (
    <>
      {error && <div>Error: {error}</div>}
      {data && <h2>value: {data.value}</h2>}
    </>
  );
};

export default index;
