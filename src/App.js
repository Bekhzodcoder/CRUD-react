import React from 'react';
import Get from './components/GET'
import POST from './components/POST';
import PUT from './components/PUT_and_delete';
function App() {

  return (
    <>
      <h3>Posst api react</h3>
      <POST />
      <h3>Get api react</h3>
      <Get />
      <h3>Update And Delete Api React</h3>
      <PUT />
    </>
  );
}

export default App;
