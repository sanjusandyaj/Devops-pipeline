import React, { useState } from "react";
import "./App.css";
 
function App() {
  const [opinion, setOpinion] = useState("");
  const [opinions, setOpinions] = useState([]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (opinion.trim() === "") return;
    setOpinions([...opinions, opinion]);
    setOpinion("");
  };
 
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>User Opinion Page 📝</h1>
      </header>
 
      {/* Main */}
      <main className="main">
        <h2>Topic: What is your opinion about Artificial Intelligence (AI)?</h2>
 
        <form onSubmit={handleSubmit} className="form">
          <textarea
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            placeholder="Write your opinion here..."
            className="textarea"
          ></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
 
        <div className="opinions">
          <h3>All Opinions:</h3>
          {opinions.length === 0 ? (
            <p>No opinions yet. Be the first!</p>
          ) : (
            <ul>
              {opinions.map((op, index) => (
                <li key={index} className="opinion">{op}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
 
      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Opinion Board</p>
      </footer>
    </div>
  );
}
 
export default App;
test('renders hello world', () => {
  render(<App />);
  const element = screen.getByText(/hello world/i);
  expect(element).toBeInTheDocument();
});
