import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 far away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {[...Array(20).keys()].map((option) => (
          <option key={`option-${option + 1}`}>{option + 1}</option>
        ))}
      </select>
      <input type="text" placeholder="Item"></input>
      <button>Add</button>
    </div>
  );
}

function PackingList() {
  const [list, setList] = useState(["First"]);
  return (
    list.length > 0 && (
      <div className="list">
        {list.map((item) => (
          <div>
            <input type="checkbox"></input>
            <p>{item}</p>
            <span>&times;</span>
          </div>
        ))}
      </div>
    )
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X%</em>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
