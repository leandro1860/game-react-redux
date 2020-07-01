import React from "react";
import {Modal, Container} from "react-bootstrap";
import "./modalNotification.css";

function ModalNotification(props) {
  return (
    <Container>
      <div>
        <Modal.Body id='modal-notification'>
          <p>{props.message}</p>
        </Modal.Body>
      </div>
    </Container>
  );
}

export default ModalNotification;
