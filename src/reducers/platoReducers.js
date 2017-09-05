import {ADD_PLATO,EDITAR_PLATO} from '../actions/platoActions.js';

const abmPlato = (state = [], action) => {
    switch (action.type) {
      case ADD_PLATO:
        return [
          ...state,
          action.payload
        ]
      case EDITAR_PLATO:
        return state.map((unPlato,indice) =>{
            if(indice === action.indice) {
                return Object.assign({}, unPlato, { editable: true })
            }else{
                return unPlato;
            }            
        });
      default:
        return state
    }
  }
  
  export default abmPlato;