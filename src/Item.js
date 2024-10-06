import React, { useState } from "react";

export function Item({ item, list, setList }) {
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
