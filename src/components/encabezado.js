import React, {PropTypes}  from 'react';

export const Encabezado = (props, {store}) => <h1>Hola!</h1>

Encabezado.contextTypes = {
    store: PropTypes.object
}