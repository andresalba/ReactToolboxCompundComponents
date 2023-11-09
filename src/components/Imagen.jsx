import React from 'react';

const Imagen = ({source}) => {
    return (
        <div>
            <img src={source} alt="Logo" style={{width: '100px', height:'100px'}} />
        </div>
    );
};


export default Imagen;