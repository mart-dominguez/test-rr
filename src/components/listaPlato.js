import React  from 'react';

export const ListaPlato = ({listadoPlatos,onPlatoClick}) => {
    let estilo = {
        margin: '4px'
    }
    let listaPlatosAux = listadoPlatos.map((unPlato,indice) =>
        <li key={indice}>
            <span style={estilo}>{unPlato.nombre}</span>
            <span style={estilo}>${unPlato.precio}</span>
            <button onClick={() => onPlatoClick(indice)}>Editar</button>
            </li>
    );
    console.log(listaPlatosAux);

    return(        
        <ul>
        {listaPlatosAux}
        </ul>
    )
  }


export default ListaPlato