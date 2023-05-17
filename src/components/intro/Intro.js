import { Link, useNavigate } from "react-router-dom";
import logo from "../../Logo.png";
import { useState } from "react";
import { Modal } from "../commons/modal/Modal";

import "./intro.css";
import { getPlayByCode } from "./service";

//playNames: Cementerio

export function Intro() {
  const [openModal, setOpenModal] = useState(false);
  const [playCode, setPlayCode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const openToModal = () => {
    setOpenModal(true);
  };

  const closeToModal = () => {
    setOpenModal(false);
    setPlayCode("");
    setError("");
  };

  const introduceCode = (event) => {
    setPlayCode(event.target.value);
  };

  const sendCode = async (event) => {
    event.preventDefault();

    try {
      const play = await getPlayByCode(playCode);
      navigate(`${play.playName}/playCode=${playCode}`);
    } catch (error) {
      setError(error.message);
    }
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
          <form id="introducePlayCode" onSubmit={sendCode}>
            <label htmlFor="inputCode">Introduce el código del juego</label>
            <input
              type="text"
              id="inputCode"
              value={playCode}
              onChange={introduceCode}
            ></input>
            <button
              className="sendInputCodeButton"
              type="submit"
              form="introducePlayCode"
            >
              Enviar
            </button>
            <div className="error">{error}</div>
          </form>
        </Modal>
      )}
    </header>
  );
}
