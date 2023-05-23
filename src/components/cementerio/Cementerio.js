import { useEffect, useState } from "react";
import { getPlayByCode } from "../intro/service";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../commons/modal/Modal";
import { Error } from "../commons/error/Error";

export function Cementerio() {
  const [phase, setPhase] = useState(1);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const playCode = useParams().playCode;
  console.log(playCode);

  const sendCode = async () => {
    try {
      const play = await getPlayByCode(playCode);
      setPhase(play.phase);
    } catch (error) {
      setError(error.message);
    }
  };

  const navigateToHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    sendCode();
  });
  return (
    <>
      {error ? (
        <Modal closeModal={navigateToHome}>
          <Error errorMessage={error}></Error>
        </Modal>
      ) : (
        <div>Estás en la vista de Cementerio</div>
      )}
    </>
  );
}
