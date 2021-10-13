import React from 'react';
import { createObserverSelect } from 'utils';

const storeFactory = () => {
  let store;

  if (store === undefined) {
    console.log('Create store');
    store = createObserverSelect({});
  }
};

const Observer = () => {
  const obj = createObserverSelect({});
  const unobserve = obj.observe('lastname', (v) => console.log(v));
  setTimeout(() => {
    obj.name = 'Ivan';
  }, 1000);
  setTimeout(() => {
    obj.lastname = 'Brajković';
  }, 2000);
  // setTimeout(() => {
  //   unobserve();
  // }, 2000);
  return <div>Observer</div>;
};

export default Observer;
