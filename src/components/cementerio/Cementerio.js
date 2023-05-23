import { useEffect, useState } from "react";
import { getPlayByCode } from "../intro/service";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../commons/modal/Modal";
import { Error } from "../commons/error/Error";

import "./cementerio.css";
import { Phase } from "./phases/Phase";

export function Cementerio() {
  const [phase, setPhase] = useState(1);
  const [error, setError] = useState("");
  const [rightAnswer, setRightAnswer] = useState(false);

  const navigate = useNavigate();

  const playCode = useParams().playCode;

  const navigateToHome = () => {
    navigate(`/`);
  };

  const nextPhase = () => {
    if (rightAnswer === true) {
      const newPhase = phase + 1;
      setPhase(newPhase);
    }
  };

  const previousPhase = () => {
    const newPhase = phase - 1;
    setPhase(newPhase);
  };

  useEffect(() => {
    const sendCode = async () => {
      try {
        const play = await getPlayByCode(playCode);
        setPhase(play.phase);
      } catch (error) {
        setError(error.message);
      }
    };

    sendCode();
  }, [playCode]);

  const isRight = (boolean) => {
    if (boolean === true) {
      setRightAnswer(true);
    }
  };
  return (
    <>
      {error ? (
        <Modal closeModal={navigateToHome}>
          <Error errorMessage={error}></Error>
        </Modal>
      ) : (
        <section className="playContent">
          <h2>Cementerio de Granada</h2>
          <Phase phase={phase} test={isRight} />
          {phase > 1 && <button onClick={previousPhase}>Anterior</button>}
          <button onClick={nextPhase}>Siguiente</button>
        </section>
      )}
    </>
  );
}
