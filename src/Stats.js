import React, { useState } from "react";

export function Stats({ list }) {
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
