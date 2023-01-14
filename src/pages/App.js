import gitLogo from '../assets/logo-github.png';
import { Conteudo } from './styles';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {useState} from 'react';
import {api} from '../service/api';
import Repositorios from '../components/RepositoriosGit';


const  App = ()=> {

const [repositorioAtual , selecionandoReposAtual] =  useState('');
 const [repositorios ,selecionandorepositorios] = useState([]);
  
const procurandoRepositorioUsuario = async ()=>{

  const {dados} =  await api.get(`/repos/${repositorioAtual}`)


  if (dados.id){ 
    
    const repositorioExiste = repositorios.find(repositorio => repositorio.id === dados.id)

    if(!repositorioExiste){
    
    selecionandorepositorios( prev  => [...prev, dados]);
    selecionandorepositorios('');
    return
    };
  };

  alert('repositorio nao encontrado');

}

const removerRepositorio = (id)=>{
  console.log(id);

}


  return (
    <Conteudo>
      <img alt="logo" src={gitLogo} width={72} height={72}/>
      <Input value ={repositorioAtual} onChange ={(e)=>selecionandoReposAtual(e.target.value)}/>
      <Button onClick={procurandoRepositorioUsuario}/>

      {repositorios.map(repositorio => <Repositorios remover = {removerRepositorio} repositorio={repositorio} />)}
    </Conteudo>
  );
}

export default App;
