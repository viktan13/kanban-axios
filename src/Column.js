import React from 'react';

const Column = ({status}) => {
    return (
        <div className="col">
            <h2>
                {status.title}
            </h2>
        </div>
    );
};

export default Column;