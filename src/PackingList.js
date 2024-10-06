import React, { useState } from "react";
import { Item } from "./Item";

export function PackingList({ list, setList }) {
  const [selected, setSelected] = useState("input");

  let sortedList;

  if (selected === "input")
    sortedList = list.slice().sort((a, b) => a.id - b.id);
  if (selected === "description")
    sortedList = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (selected === "packed")
    sortedList = list.slice().sort((a, b) => a.packed - b.packed);

  function handleClear() {
    let check = window.confirm("Are you sure that you wanna remove all items?");
    if (check) {
      setList([]);
    } else {
      return;
    }
  }
  return (
    <div className="list">
      <ul>
        {list.length > 0 &&
          sortedList.map((item) => (
            <Item
              key={`${item.description}${item.id}`}
              item={item}
              list={list}
              setList={setList}
            />
          ))}
      </ul>
      <div className="actions">
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}
