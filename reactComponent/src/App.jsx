import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../../public/vite.svg";

function App(props) {
  const [count, setCount] = useState(parseInt(props.value));

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          React button: count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
