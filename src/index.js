import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form list={list} setList={setList} />
      <PackingList list={list} setList={setList} />
      <Stats list={list} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 far away 💼</h1>;
}

function Form({ list, setList }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    setList([
      ...list,
      {
        id: list.length + 1,
        description: description,
        quantity: quantity,
        packed: false,
      },
    ]);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {[...Array(20).keys()].map((option) => (
          <option value={option + 1} key={`option-${option + 1}`}>
            {option + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ list, setList }) {
  return (
    <div className="list">
      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <Item
              key={`${item.description}${item.id}`}
              item={item}
              list={list}
              setList={setList}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function Item({ item, list, setList }) {
  const [isEnd, setIsEnd] = useState(item.packed);

  item.packed = isEnd;

  function handleDelete() {
    setList(list.filter((i) => i.id !== item.id));
  }

  function handleChange(e) {
    setIsEnd(e.target.checked);
    setList(
      list.map((li) => {
        return li.id === item.id ? { ...li, packed: !item.packed } : { ...li };
      })
    );
  }
  return (
    <li>
      <input type="checkbox" checked={isEnd} onChange={handleChange}></input>
      <span style={isEnd ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

function Stats({ list }) {
  const length = list.length;
  const numbersPacked = list.filter((item) => item.packed).length;

  const percentPacked =
    length !== 0 &&
    Number((list.filter((item) => item.packed).length / length) * 100).toFixed(
      0
    );
  if (length == 0)
    return (
      <footer className="stats">
        <em>Start Adding Some items to your packing list 🚀</em>
      </footer>
    );
  return (
    <footer className="stats">
      {percentPacked != 100 ? (
        <em>
          You have {length} items on your list, and you already packed{" "}
          {numbersPacked} ({percentPacked})%
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
