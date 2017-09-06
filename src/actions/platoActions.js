/*
 * Acciones sobre el plato
 */
export const ADD_PLATO = 'ADD_PLATO'
export const EDITAR_PLATO = 'EDITAR_PLATO'
export const ACTUALIZAR_PLATO = 'ACTUALIZAR_PLATO'
export const ACTUALIZAR_ATRIBUTO_PLATO = 'ACTUALIZAR_ATRIBUTO_PLATO'

/*
 * Creadores de acciones
 */

export function addPlato(datoPlato) {
  return { type: ADD_PLATO, payload:datoPlato }
  
}

export function editPlato(indicePlato) {
  return { type: EDITAR_PLATO, indice:indicePlato }
}

export function actualizarPlato(datoPlato,pIndice) {
  return { type: ACTUALIZAR_PLATO, payload:datoPlato,indicePlato:pIndice }
}

export function actualizarCampo(campo,valor,indice) {
  return { type: ACTUALIZAR_ATRIBUTO_PLATO, atributo:campo,valor:valor,indicePlato:indice }
}
