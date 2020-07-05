import React from "react";
import {Modal, Button} from "react-bootstrap";

const ModalNotification = props => (
  <>
    <Modal show={props.show}>
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
export default ModalNotification;
