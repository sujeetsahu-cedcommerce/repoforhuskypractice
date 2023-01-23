import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{" "}
                               <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> <p>anchor before this para         </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
                                    Learn React
        </a>
        <p>this is para</p>
      </header>
      <Hello></Hello>
    {/* <p>sujeeet sahu </p> */}

    </div>
  );
}

export default App;
