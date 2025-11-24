import React from 'react';
// You might have an App.css file you want to import
// import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The test specifically looks for this text */}
        <p>
          Artificial Intelligence
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
