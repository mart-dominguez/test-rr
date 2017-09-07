import {ACTUALIZAR_PLATO,EDITAR_PLATO,ADD_PLATO,ACTUALIZAR_ATRIBUTO_PLATO} from '../actions/platoActions.js';

const platoSeleccionado = (state = {indice:-1,plato:{nombre:'',precio:0}}, action) => {
    switch (action.type) {     
      case ACTUALIZAR_PLATO:
        return Object.assign({}, state, {
          indice:-1
        })  
      case EDITAR_PLATO:
        console.log("EDITAR PLATO");
        console.log(action);
        return Object.assign({}, state, {indice:action.indice});
      case ADD_PLATO:
        return Object.assign({}, state, {indice:-1});
      default:
        return state
    }
  }

export default platoSeleccionado;