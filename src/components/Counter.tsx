import { useState } from "react";
import "./Couner.scss";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <h3>{count}</h3>
    </div>
  );
}
