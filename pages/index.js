import { makeObservable } from '@ivbrajkovic/simple-state';
import { PortalGate, openGate, closeGate } from '@ivbrajkovic/simple-portal';

const o = makeObservable({ name: 'Ivan', age: 37 });

const Overlay = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#00000070',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={onClose}>Close overlay</button>
    </div>
  );
};

const Index = () => {
  console.log("I'm in index.js");

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <div>
          <h1>Hello, {o.name}</h1>
        </div>
        <div>
          <h2>You are {o.age} years old</h2>
        </div>
        <div
          style={{
            position: 'relative',
            height: 100,
            backgroundColor: 'dodgerblue',
          }}
        >
          <button
            onClick={() => openGate(<Overlay onClose={() => closeGate()} />)}
          >
            Open overlay
          </button>
        </div>
      </div>
      <PortalGate />
    </div>
  );
};
export default Index;
