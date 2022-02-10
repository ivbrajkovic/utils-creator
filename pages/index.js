import { useDeepEffect, useDeepState } from '@ivbrajkovic/deep-state';
import { useEffect, useRef, useState } from 'react';

const Index = () => {
  const nameRef = useRef();
  const ageRef = useRef();

  const [state, setState] = useDeepState({ name: 'Ivan', age: 40 });

  const c = useRef(0);
  useEffect(() => {
    c.current = c.current + 1;
  });

  const handleNameChange = () => {
    setState({ name: nameRef.current.value }, ['name']);
  };

  const handleAgeChange = () => {
    setState({ age: parseInt(ageRef.current.value) }, ['age']);
  };

  const [nameChangeCount, setNameChangeCount] = useState(0);
  useDeepEffect(
    () => {
      setNameChangeCount(nameChangeCount + 1);
    },
    [state],
    ([oldState]) => oldState.name !== state.name
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>Render count: {c.current}</div>
      <div>Name changes: {nameChangeCount}</div>
      <br />
      <div>
        <input ref={nameRef} defaultValue={state.name} />
        <button id="name_btn" onClick={handleNameChange}>
          Change
        </button>
      </div>
      <div>
        <input ref={ageRef} defaultValue={state.age} />
        <button id="age_btn" onClick={handleAgeChange}>
          Change
        </button>
      </div>
      <br />
      <div>
        {state.name}, {state.age}
      </div>
    </div>
  );
};

export default Index;
