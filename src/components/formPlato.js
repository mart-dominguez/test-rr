import React, {PropTypes}  from 'react';
import { addPlato } from '../actions/platoActions'

export const FormPlato = ({platoSeleccionado,indice,onCreatePlato,onUpdatePlato,onChangeProperty}) => {
    let _nombrePlato, _precioPlato;
    let nombreAux,precioAux;
    if(indice>=0){
        nombreAux=platoSeleccionado.nombre;
        precioAux=platoSeleccionado.precio;    
    }else{
        nombreAux= 'abc';
        precioAux= 0.0;    
    }

    const handleEvent = e =>{
        console.log(onCreatePlato);
        console.log(onUpdatePlato);
        console.log(onChangeProperty);
        console.log(e.value);
        console.log(platoSeleccionado);
        onChangeProperty("nombre",e.value,indice)
    }

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
            <div>Nombre:<input  type="text" 
                                id="nombrePlato" 
                                value={platoSeleccionado.nombre}
                                onChange={e =>handleEvent(e) }
                                ref={input => _nombrePlato = input}
                                />
            </div>
            <div>Precio:
                <input type="text" 
                        id="precio"
                        value={precioAux}
                  //      onChange={(e) => precioAux=e.target.value}
                    //    ref={input => _precioPlato = input}
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
