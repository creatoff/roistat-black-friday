import { MouseEventHandler } from "react";
import CloseIcon from "../assets/close.svg?react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal-root');

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: MouseEventHandler;
}

export function Modal({ title, children, isOpen, onClose }: ModalProps) {
  if (!modalRoot) return null;

  return createPortal(
    isOpen ? (
      <div className="overlay">
        <div className="modal glassed">
          <div className="modal__content">
            <ModalCloseButton onClick={onClose} />
            <div className="modal__title">{title}</div>
            {children}
          </div>
        </div>
    </div>
    ) : null,
    modalRoot
  );
}

function ModalCloseButton({ ...restProps }) {
  return (
    <button className="modal__close" {...restProps}>
      <CloseIcon />
    </button>
  );
}
