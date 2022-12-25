import React, {useState} from 'react';
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import {Button} from "reactstrap";

const Task = ({task, deleteTask, updateTask, statuses, priorities}) => {
    function upButtonHandler() {
        const updTask = {...task, priority: +task.priority + 1}
        updateTask(updTask);
    }

    function downButtonHandler() {
        const updTask = {...task, priority: +task.priority - 1}
        updateTask(updTask);
    }

    console.log(priorities);

    function moveCardLeft() {
        const status = statuses.find(el => el.title === task.status);
        const updTask = {...task, status: statuses[statuses.indexOf(status) - 1].title};
        updateTask(updTask);
    }

    function moveCardRight() {
        const status = statuses.find(el => el.title === task.status);
        const updTask = {...task, status: statuses[statuses.indexOf(status) + 1].title};
        updateTask(updTask);
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Priority: {task.priority}
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={upButtonHandler}
                            disabled={priorities.indexOf(+task.priority) === priorities.length - 1}
                        >↑</button>

                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={downButtonHandler}
                            disabled={priorities.indexOf(+task.priority) === 0}
                        >↓</button>
                    </li>
                    <li className="list-group-item">Status: {task.status}</li>
                </ul>
                <div className="card-body">
                    <button
                        className="btn btn-outline-primary"
                        disabled={statuses[0].title === task.status}
                        onClick={moveCardLeft}
                    >←</button>
                    <Button color="success" outline onClick={toggle}>
                        Update
                    </Button>
                    {modal && <UpdateTaskModal
                        task={task}
                        statuses={statuses}
                        priorities={priorities}
                        toggle={toggle}
                        modal={modal}
                        updateTask={updateTask}
                    />}
                    <DeleteTaskModal
                        task={task}
                        deleteTask={deleteTask}
                    />
                    <button
                        className="btn btn-outline-primary"
                        disabled={statuses[statuses.length - 1].title === task.status}
                        onClick={moveCardRight}
                    >→</button>
                </div>
        </div>
    );
};

export default Task;