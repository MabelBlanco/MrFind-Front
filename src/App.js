import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Intro } from "./components/intro/Intro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
      </Routes>
    </div>
  );
}

export default App;
