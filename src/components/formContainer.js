import FormPlato from './formPlato'
import { connect } from 'react-redux'
import { addPlato,actualizarPlato,actualizarCampo } from '../actions/platoActions'

const getIndice = (estado) => {
    console.log(estado);
    return estado.indicePlato;
}

const mapStateToProps = state =>    (
    {        
        platoSeleccionado: state.indicePlato>=0? state.abmPlato[state.indicePlato] : state.platoActual,
        indice:getIndice(state)
    }
)

const mapDispatchToProps = dispatch =>    (
    {
        onCreatePlato: (nombrePlato,precioPlato) => {dispatch(addPlato({nombre:nombrePlato,precio:precioPlato})) },        
        onUpdatePlato: (nombrePlato,precioPlato,indice) => {dispatch(actualizarPlato({nombre:nombrePlato,precio:precioPlato},indice)) },
        onChangeProperty: (propiedad,valor,indice) => {dispatch(actualizarCampo(propiedad,valor,indice)) }        
   }
)
export const GestorPlatos = connect(    mapStateToProps,    mapDispatchToProps)(FormPlato)
