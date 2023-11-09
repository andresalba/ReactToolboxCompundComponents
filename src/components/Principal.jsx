import React from 'react';
import Titulo1 from './Titulo1';
import Titulo2 from './Titulo2';
import Titulo3 from './Titulo3';
import Texto1 from './Texto1';
import Imagen from './Imagen';

const Principal = ({ children }) => {
    return (
        <div>
            <h1>Componente Principal</h1>
            {children}
        </div>
    );
};

export default Principal;

Principal.Titulo1 = Titulo1;
Principal.Titulo2 = Titulo2;
Principal.Titulo3 = Titulo3;
Principal.Texto1 = Texto1;
Principal.Imagen = Imagen;