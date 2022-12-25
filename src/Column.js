import React from 'react';
import Task from "./Task";

const Column = ({status, tasks, deleteTask, updateTask, statuses, priorities}) => {
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
                        statuses={statuses}
                        priorities={priorities}
                    />
                ))}
        </div>
    );
};

export default Column;