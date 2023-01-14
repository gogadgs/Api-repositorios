import React from 'react'
import { ConteudoBotao } from './style';
 


export const  Button = ({onClick}) => {

  return (
    <ConteudoBotao onClick={onClick}>Buscar</ConteudoBotao>
  )
}

