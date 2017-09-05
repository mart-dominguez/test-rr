import {ADD_PLATO,EDITAR_PLATO} from '../actions/platoActions.js';

const abmPlato = (state = [], action) => {
    switch (action.type) {
      case ADD_PLATO:
        console.log(action.payload);
        return [
          ...state,
          action.payload
        ]
      case EDITAR_PLATO:
        return state.filter((unPlato,indice) =>{
            indice === action.indice
        });
      default:
        console.log("DEFAULT");
        console.log(action);
        return state
    }
  }
  
  export default abmPlato;