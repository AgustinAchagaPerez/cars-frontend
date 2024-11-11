// src/components/PopUp.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopUp = ({ message }) => {
  return (
    <Modal show={!!message} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Action Complete</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
