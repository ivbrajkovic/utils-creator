import React, { useEffect } from 'react';
// import { isObjectEmpty, fetchSimpleJsonAsync } from "@ivbrajkovic/utils";
import { absValue } from '../src/utils';

const inline = () => {
  console.log('absValue', absValue(-300));

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await fetchSimpleJsonAsync(
  //         "http://localhost:4000/todos/1"
  //       );
  //       console.log("inline -> data", data);
  //     } catch (error) {
  //       console.log("inline -> error", error);
  //     }
  //   })();
  // }, []);

  return <div></div>;
};

export default inline;
