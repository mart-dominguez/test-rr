import { combineReducers } from 'redux'
import abmPlato from './platoReducers'
import platoSeleccionado from './platoSeleccionado'

const rootReducer = combineReducers({
  abmPlato,
  platoSeleccionado
})

export default rootReducer;