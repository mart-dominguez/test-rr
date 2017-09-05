import React, {PropTypes}  from 'react';
import { addPlato } from '../actions/platoActions'

export const FormPlato = (props, {store}) => {
    let _nombrePlato, _precioPlato
    
    const submit = e => {
            console.log(e);
            //payload._nombrePlato.value, _precioPlato.value
            let payload = {nombre:_nombrePlato.value,precio:_precioPlato.value};
            console.log(payload);
            e.preventDefault();
            store.dispatch( addPlato(payload) )
            _nombrePlato.value = ''
            _precioPlato.value = '0.00'
            _nombrePlato.focus()
        };
return(
    <div>
        <h1>Gestion de Platos</h1>
        <form onSubmit={submit}>
            <div>Nombre:<input  type="text" 
                                id="nombrePlato" 
                                ref={input => _nombrePlato = input}
                                />
            </div>
            <div>Precio:
                <input type="text" 
                        id="precio"                     
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