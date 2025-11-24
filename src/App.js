import React, { useState } from 'react';
import './App.css';

function App() {
  const [opinions, setOpinions] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setOpinions([...opinions, text.trim()]);
      setText('');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>User Opinion Page 📝</h1>
      </header>
      <main className="main">
        <h2>Topic: What is your opinion about Artificial Intelligence (AI)?</h2>
        <form className="form" onSubmit={handleSubmit}>
          <textarea
            className="textarea"
            placeholder="Write your opinion here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
        <div className="opinions">
          <h3>All Opinions:</h3>
          {opinions.length === 0 ? (
            <p>No opinions yet. Be the first!</p>
          ) : (
            opinions.map((op, index) => <p key={index}>{op}</p>)
          )}
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 Opinion Board</p>
      </footer>
    </div>
  );
}

export default App;
