import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  useEffect(() => {
    console.log("Modal created");
    return () => {
      console.log("Modal removed");
    };
  }, []);

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          {" "}
          ×
        </button>
        <div className="modal-content">Hello World!</div>
      </div>
    </div>,
    document.getElementById("modals")!
  );
};

export default Modal;
