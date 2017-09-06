import {ACTUALIZAR_PLATO,EDITAR_PLATO,ADD_PLATO,ACTUALIZAR_ATRIBUTO_PLATO} from '../actions/platoActions.js';

const platoSeleccionado = (state = {indice:-1,plato:{nombre:'',precio:0}}, action) => {
    switch (action.type) {     
      case ACTUALIZAR_PLATO:
        return Object.assign({}, state, {
          indice:action.indice
        })
      case ACTUALIZAR_ATRIBUTO_PLATO:
        let newEstado = Object.assign({}, state, {indice:action.indice});
        newEstado.plato[action.atributo]=action.valor;
        return newEstado;
      case EDITAR_PLATO:
      case ADD_PLATO:
        return -1;
      default:
        return state
    }
  }

export default platoSeleccionado;