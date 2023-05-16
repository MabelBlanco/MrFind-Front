import "./modal.css";

export function Modal({ children, closeModal }) {
  return (
    <>
      <div className="restContent"></div>
      <div className="modalContent">
        <button className="buttonCloseModal" onClick={closeModal}>
          X
        </button>
        <div className="modalChildren">{children}</div>
      </div>
    </>
  );
}
