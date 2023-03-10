/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { RepositoriosConteudo } from './style';



  const Repositorios = ({repositorio,removerRepositorio})=> {
    const remover = ()=>{

      removerRepositorio(repositorio.id);
      
     
    }

  return (
    <RepositoriosConteudo onClick={remover}>
        <h3>{repositorio.name}</h3>
        <p>{repositorio.full_name}:</p>
        <a href= {repositorio.html_url}  rel="noreferrer" className="ver" target ="_blank">Ver Repositorio</a>
        <a href="#"  rel="noreferrer" className="remover">Remover</a>
        <hr/>

    </RepositoriosConteudo>
  )
}

export default  Repositorios;

