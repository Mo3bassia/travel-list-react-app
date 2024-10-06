import React, { useState } from "react";

export function Form({ list, setList }) {
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
