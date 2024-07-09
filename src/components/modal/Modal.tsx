import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";

import { ModalContext } from "../../context/ModelContext";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

export function ModalWindows({ children, title }: ModalProps) {
  const { modal, open, close } = useContext(ModalContext);
  return (
    <div id="modalcalling">
      <Button className="btn-showmodal" onClick={open}>
        <img
          src={require(`../../assets/img/home.png`)}
          alt="home"
          className="img"
          title="home"
        />
        {title}
      </Button>

      <Modal show={modal} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
}
