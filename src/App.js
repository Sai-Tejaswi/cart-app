
import React from 'react';
import './App.css';

function App() {
  const bey = "there";
  const isloggedin = true;
  return (
    <div>
      {isloggedin ? null : <h1>hi</h1> }
      <p>{ isloggedin ? bey : 'heya'}</p>
    </div>
      
    
  );
}

export default App;
