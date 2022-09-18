import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary defaultKeyword="mountain"/>
        <footer className="App-footer">
          <small>
            This project was coded by Carolyn Partsch and is open-sourced on{" "}
            <a
              href="https://github.com/cspartsch/dictionary-project"
              target="#blank"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
