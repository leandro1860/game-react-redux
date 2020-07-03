import React from "react";
import "./modalNotification.css";
import {Modal, Button} from "react-bootstrap";

function ModalNotification(props) {
  return (
    <>
      <Modal id='modal-notification' show={props.show}>
        <Modal.Header>
          <Modal.Title>{props.result}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.statistics}</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={props.playAgain}>
            Play again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNotification;
