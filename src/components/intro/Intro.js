import logo from "../../Logo.png";

export function Intro() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {"Haz click "}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aquí
        </a>
        {" para jugar"}
      </p>
    </header>
  );
}
