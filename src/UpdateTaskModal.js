import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function UpdateTaskModal(props) {

    const {task, priorities, statuses, toggle, modal, updateTask} = props;


    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);
    const [status, setStatus] = useState(task.status);


    function saveButtonHandler() {
        const updTask = {...task, name, description, priority, status};
        updateTask(updTask);
        toggle();
    }

    function cancelButtonHandler() {
        setName(task.name);
        setDescription(task.description);
        setPriority(task.priority);
        setStatus(task.status);
        toggle();
    }

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name:</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Description:</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Priority:</span>
                        <select
                            className="form-select"
                            value={priority}
                            onChange={e => setPriority(e.target.value)}
                        >
                            {priorities.map(el => (
                                <option value={el} key={el}>{el}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Status:</span>
                        <select
                            className="form-select"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            {statuses.map(el => (
                                <option value={el.title} key={el.title}>{el.title}</option>
                            ))}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveButtonHandler}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={cancelButtonHandler}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default UpdateTaskModal;