import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ErrorModal({showModal,setModalFalse}) {

    return (
        

        <Modal show={showModal} onHide={setModalFalse}>
            <Modal.Header closeButton>
            <Modal.Title>You Fucked Up!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Shit, that stock don't exist</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={setModalFalse}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
);
}
