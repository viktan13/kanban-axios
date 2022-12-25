import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateTaskModal(props) {

    const {createTask, statuses, priorities} = props;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);
    const [status, setStatus] = useState('todo');

    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);

    function saveButtonHandler() {
        createTask({name, description, priority, status});
        toggle();
        setName('');
        setDescription('');
    }

    return (
        <div>
            <div className="row">
                <div className="col-2 offset-10">
                    <Button color="info" outline onClick={toggle}>
                        Add task
                    </Button>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Add task</ModalHeader>
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
                    <Button
                        color="primary"
                        onClick={saveButtonHandler}
                    >
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateTaskModal;