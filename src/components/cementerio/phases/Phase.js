import { useEffect, useState } from "react";
import { Screen1 } from "./views/Screen1.js";

export function Phase({ phase, test }) {
  const [screen, setScreen] = useState("");

  useEffect(() => {
    if (phase === 1) {
      setScreen(<Screen1 test={test} />);
    } else {
      setScreen("");
    }
  }, [phase, test]);
  return <>{screen}</>;
}
