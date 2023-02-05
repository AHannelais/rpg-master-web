import { Component, onError } from 'solid-js';

const App: Component = () => {
  onError((error) => {
    console.error(error.message);
    console.error(error.stack);
  });

  return (
    <>
      <div>test</div>
    </>
  );
};

export default App;
