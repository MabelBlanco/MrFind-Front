import { Link } from "react-router-dom";
import logo from "../../Logo.png";
import { useState } from "react";
import { Modal } from "../commons/modal/Modal";

import "./intro.css";

export function Intro() {
  const [openModal, setOpenModal] = useState(false);
  const [playCode, setPlayCode] = useState("");

  const openToModal = () => {
    setOpenModal(true);
  };

  const closeToModal = () => {
    setOpenModal(false);
  };

  const introduceCode = (event) => {
    setPlayCode(event.target.value);
  };

  const sendCode = () => {
    console.log(playCode);
  };
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {"Haz click "}
        <Link className="App-link" onClick={openToModal}>
          aquí
        </Link>

        {" para jugar"}
      </p>

      {openModal && (
        <Modal closeModal={closeToModal}>
          <div>Introduce el código del juego</div>
          <input
            type="text"
            className="inputCode"
            value={playCode}
            onChange={introduceCode}
          ></input>
          <button className="sendInputCodeButton" onClick={sendCode}>
            Enviar
          </button>
        </Modal>
      )}
    </header>
  );
}
