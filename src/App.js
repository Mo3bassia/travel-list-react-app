import React, { useState } from "react";
import { Logo } from "./logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
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
