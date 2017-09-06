import ListaPlato from './listaPlato'
import { connect } from 'react-redux'
import { editPlato } from '../actions/platoActions'

const mapStateToProps = state =>    (
    {        
        listadoPlatos: state.abmPlato    
    }
)
const mapDispatchToProps = dispatch =>    ({        
    onPlatoClick: id => {dispatch(editPlato(id)) }
    }
)
export const Platos = connect(    mapStateToProps,    mapDispatchToProps)(ListaPlato)
//export const Platos = connect(    mapStateToProps)(ListaPlato)