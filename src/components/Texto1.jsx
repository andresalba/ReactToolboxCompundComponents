import React from 'react';

const Texto1 = ({ text1, children }) => {
    return (
        <div>
            <strong>{text1}</strong>
            <p>{children}</p>
        </div>
    );
};


export default Texto1;