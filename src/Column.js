import React from 'react';
import Task from "./Task";

const Column = ({status, tasks, deleteTask, updateTask}) => {
    return (
        <div className="col">
            <h2>
                {status.title.toUpperCase()}
            </h2>
            {tasks.filter(el => el.status === status.title)
                .map(el => (
                    <Task
                        task={el}
                        key={el._id}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))}
        </div>
    );
};

export default Column;