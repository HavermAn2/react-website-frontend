import { useRef, useEffect } from "react";

export default function Modal({ isOpen, children, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);
  return (
    <dialog ref={dialog} onClose={onClose}>
      {isOpen ? children : null}
    </dialog>
  );
}
