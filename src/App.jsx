import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [host, setHost] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const currentHost = window.location.hostname;
    setHost(currentHost);

    axios
      .get(`https://church.thefabulousshow.com/api/frontsite/homepage`, {
        headers: {
          "X-Tenant-Host": currentHost,
          "Accept": "application/json",
        },
      })
      .then((res) => {
        setResponse(res.data); // store the response in state
        console.log(res.data);
      })
      .catch((err) => {
        console.error("API call failed:", err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Host: {host}</h1>

        <div className="response-container">
          <h2>API Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
