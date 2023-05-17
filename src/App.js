import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Intro } from "./components/intro/Intro";
import { Cementerio } from "./components/cementerio/Cementerio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Cementerio/:playCode" element={<Cementerio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
