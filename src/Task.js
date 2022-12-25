import React from 'react';
import DeleteTaskModal from "./DeleteTaskModal";

const Task = ({task, deleteTask, updateTask}) => {
    function upButtonHandler() {
        const updTask = {...task, priority: +task.priority + 1}
        updateTask(updTask);
    }

    function downButtonHandler() {
        const updTask = {...task, priority: +task.priority - 1}
        updateTask(updTask);
    }

    return (
        <div className="card">
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
                            disabled={task.priority == 10}
                        >↑</button>
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={downButtonHandler}
                            disabled={task.priority == 1}
                        >↓</button>
                    </li>
                    <li className="list-group-item">Status: {task.status}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-outline-primary">←</button>
                    <button className="btn btn-outline-success">Update</button>
                    <DeleteTaskModal
                        task={task}
                        deleteTask={deleteTask}
                    />
                    <button className="btn btn-outline-primary">→</button>
                </div>
        </div>
    );
};

export default Task;