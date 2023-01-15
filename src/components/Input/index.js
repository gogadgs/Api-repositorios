import React from 'react';
import {InputConteudo} from './style';



export const Input = ( {value , onChange}) => {
    return (
        
       <InputConteudo>
       
       <input value ={value} onChange={onChange} />
       <p>Digite:usuario/nomeDoRepositorio</p>
       
       </InputConteudo>
       
       
    
        
    );
}


