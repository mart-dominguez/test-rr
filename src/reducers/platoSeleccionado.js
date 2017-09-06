import {ACTUALIZAR_PLATO,EDITAR_PLATO,ADD_PLATO,ACTUALIZAR_ATRIBUTO_PLATO} from '../actions/platoActions.js';

const platoSeleccionado = (state = {indice:-1,plato:{nombre:'',precio:0}}, action) => {
    switch (action.type) {     
      case ACTUALIZAR_PLATO:
        return Object.assign({}, state, {
          indice:action.indicePlato
        })
      case ACTUALIZAR_ATRIBUTO_PLATO:
        console.log(action);        
        let newEstado = Object.assign({}, state, {indice:action.indicePlato});
        newEstado.plato[action.atributo]=action.valor;
        console.log(newEstado);
        return newEstado;
      case EDITAR_PLATO:
        return Object.assign({}, state, {indice:-1});
      case ADD_PLATO:
        return Object.assign({}, state, {indice:-1});
      default:
        return state
    }
  }

export default platoSeleccionado;