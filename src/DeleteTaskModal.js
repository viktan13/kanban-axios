import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteTaskModal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    function deleteButtonHandler() {
        props.deleteTask(props.task._id);
        toggle();
    }

    return (
        <>
            <Button color="danger" outline onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete: "{props.task.name}" task?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteButtonHandler}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteTaskModal;