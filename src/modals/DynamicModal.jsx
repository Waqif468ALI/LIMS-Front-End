import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import '../UI/DaynamicModal.css'

function DynamicModal({ show, onHide, children,title }) {
  return (
    <Modal className='modal-lg' show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header className='Header' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h4 className='title'>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
          {children}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default DynamicModal
