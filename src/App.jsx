import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 💼 Far Away 🌴 </h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip? </h3>
    </div>
  );
}
function PackingList() {
  return (
    <ul className="list">
      {initialItems.map((item, i) => (
        <Item item={item} i={i} />
      ))}
    </ul>
  );
}

function Item({ item, i }) {
  return (
    <li key={i}>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
