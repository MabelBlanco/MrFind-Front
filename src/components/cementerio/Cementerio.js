import { useState } from "react";
import { getPlayByCode } from "../intro/service";
import { useParams } from "react-router-dom";

export function Cementerio() {
  const [phase, setPhase] = useState(1);

  const playCode = useParams().playCode;
  console.log(playCode);

  const sendCode = async () => {
    try {
      const play = await getPlayByCode(playCode);
      setPhase(play.phase);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Estás en la vista de Cementerio</div>;
}
