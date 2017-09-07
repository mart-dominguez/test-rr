import FormPlato from './formPlato'
import { connect } from 'react-redux'
import { addPlato,actualizarPlato,actualizarCampo } from '../actions/platoActions'

const getIndice = (estado) => {
    console.log(estado.platoSeleccionado.indice);
    return estado.platoSeleccionado.indice;
}

const getPlatoInicia = (estado) => {
    console.log(estado.platoSeleccionado.indice);
    if(estado.platoSeleccionado.indice>=0)
        return estado.abmPlato[estado.platoSeleccionado.indice];
    else {
        console.log(estado.platoSeleccionado.plato);
            return estado.platoSeleccionado.plato;
    }
        
}

const mapStateToProps = state =>    (
    {        
        platoSeleccionado:getPlatoInicia(state),
        indice:getIndice(state)
    }
)

const mapDispatchToProps = dispatch =>    (
    {
        onCreatePlato: (nombrePlato,precioPlato) => {dispatch(addPlato({nombre:nombrePlato,precio:precioPlato})) },        
        onUpdatePlato: (nombrePlato,precioPlato,indice) => {dispatch(actualizarPlato({nombre:nombrePlato,precio:precioPlato},indice)) }
   }
)
export const GestorPlatos = connect(    mapStateToProps,    mapDispatchToProps)(FormPlato)
