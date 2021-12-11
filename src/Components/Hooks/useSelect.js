
import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    const[state, setState] = useState(stateInicial);

    const SelectNoticias = ()=>(
        <select 
            className ='browser-default' 
            value = {state}
            onChange = {e => setState(e.target.value)}
        >
            {opciones.map( option =>(
                <option

                 value = {option.value}
                 key={option.value}
                 >{option.label}</option>
            ))}
        </select>
    )
    return [state, SelectNoticias];
}
 
export default useSelect;