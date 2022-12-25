import React from 'react';
import Task from "./Task";

const Column = ({status, tasks}) => {
    return (
        <div className="col">
            <h2>
                {status.title.toUpperCase()}
            </h2>
            {tasks.filter(el => el.status === status.title)
                .map(el => (
                    <Task task={el} key={el._id}/>
                ))}
        </div>
    );
};

export default Column;