import React from 'react';

const Task = ({task}) => {
    return (
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Priority: {task.priority}
                        <button className="btn btn-outline-secondary btn-sm">↑</button>
                        <button className="btn btn-outline-secondary btn-sm">↓</button>
                    </li>
                    <li className="list-group-item">Status: {task.status}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-outline-primary">←</button>
                    <button className="btn btn-outline-success">Update</button>
                    <button className="btn btn-outline-danger">Delete</button>
                    <button className="btn btn-outline-primary">→</button>
                </div>
        </div>
    );
};

export default Task;