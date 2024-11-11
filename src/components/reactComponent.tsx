import React, { useState } from "react";

function reactComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    "item1",
    "item2",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
  ]);

  function doTheThing() {
    setCount(count + 1);

    setItems((oldItems) => {
      oldItems[0] = `new item: ${count}`;
      return oldItems;
    });
  }

  return (
    <div>
      {count}
      <button onClick={doTheThing}>asdf</button>
      {items.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default reactComponent;
