import { useEffect } from "react";

export function Screen1({ test }) {
  useEffect(() => {
    test(true);
  }, [test]);
  return (
    <>
      <h4>¿Cómo se juega?</h4>
      <p>Aquí iría la explicación</p>
    </>
  );
}
