import React from "react";
import { useFetchJsonAbort } from "@ivbrajkovic/react-hooks";

const index = () => {
  const [{ data, error, loading }, abort] = useFetchJsonAbort(
    "http://localhost:4000/todos/1"
  );
  console.log("index -> data", data);
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Title: {data.title}</div>}
    </>
  );
};

export default index;
