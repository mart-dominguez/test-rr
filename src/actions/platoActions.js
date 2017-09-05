/*
 * Acciones sobre el plato
 */

export const ADD_PLATO = 'ADD_PLATO'
export const EDITAR_PLATO = 'EDITAR_PLATO'

/*
 * Creadores de acciones
 */

export function addPlato(datoPlato) {
  return { type: ADD_TODO, text }
}

export function editPlato(datoPlato) {
  return { type: EDITAR_PLATO, datoPlato }
}