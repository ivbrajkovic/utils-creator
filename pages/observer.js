import React, { useEffect, useState } from 'react';
// import { isObjectEmpty, fetchSimpleJsonAsync } from "@ivbrajkovic/utils";
// import { absValue } from '../src/utils';

import {
  makeObservable,
  useSimpleState,
  useSimpleStateMulti,
} from '@ivbrajkovic/simple-state';

const observed = makeObservable({ name: 'Ivan', age: 37 });
console.log(observed);

const index = () => {
  const [age1, setAge1] = useSimpleState(observed, 'age');
  console.log('🚀 ~ file: index.js ~ line 17 ~ index ~ name1', age1);

  // const [age, setAge] = useSimpleState(observed, 'age');
  // console.log('🚀 ~ file: index.js ~ line 20 ~ index ~ age', age);

  const [{ name, age }, setSimpleState] = useSimpleStateMulti(observed, [
    'name',
    'age',
  ]);
  console.log({ name, age });

  return (
    <div>
      <button onClick={() => setSimpleState('name', 'Belma')}>
        Change name
      </button>
      <button onClick={() => setAge1(42)}>Change age</button>
      {/* <div>Name: {name}</div> */}
      {/* <div>Age: {age}</div> */}
      <div>
        Name and age: {name}, {age}
      </div>
    </div>
  );
};

export default index;
