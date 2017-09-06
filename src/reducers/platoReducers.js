import {ADD_PLATO,EDITAR_PLATO,ACTUALIZAR_PLATO,ACTUALIZAR_ATRIBUTO_PLATO} from '../actions/platoActions.js';

const abmPlato = (state = [], action) => {
    switch (action.type) {
      case ADD_PLATO:
        console.log(action.payload);
        return [
          ...state,
          action.payload
        ]
      case ACTUALIZAR_PLATO:
        return state.map((unPlato,indice) =>{
            if(indice === action.indice) return action.payload;
            else return unPlato;
        });
      default:
        console.log("DEFAULT");
        console.log(action);
        return state
    }
  }
  
  export default abmPlato;