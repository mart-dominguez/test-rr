import React, {PropTypes}  from 'react';
import { addPlato } from '../actions/platoActions'

export const FormPlato = ({platoSeleccionado,indice,onCreatePlato,onUpdatePlato}) => {
    console.log(platoSeleccionado);
    let _nombrePlato, _precioPlato;
    this.refs
    const submit = e => {        
        e.preventDefault();
        if(indice<0){
            // nuevo
            onCreatePlato(_nombrePlato.value,_precioPlato.value);
        }else{
            onUpdatePlato(_nombrePlato.value,_precioPlato.value,indice);
        }
        _nombrePlato.value = ''
        _precioPlato.value = 0.0
        _nombrePlato.focus()
    };
return(
    <div>
        <h1>Gestion de Platos</h1>
        <form onSubmit={submit}>
           <InputForm  />
           <div>Nombre:<input  type="text" 
                                id="nombrePlato" 
                                defaultValue={platoSeleccionado.nombre}
                                ref={input => _nombrePlato = input}
                                />
            </div>
            <div>Precio:
                <input type="text" 
                        id="precio"
                        defaultValue={platoSeleccionado.precio}
                        ref={input => _precioPlato = input}
                        />
            </div>
            <button  type="submit" >Alta Plato</button>
        </form>
    </div>
)


    }

FormPlato.contextTypes = {
    store: PropTypes.object
}

export default FormPlato
