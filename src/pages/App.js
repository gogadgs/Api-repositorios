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

  const {data} =  await api.get(`/repos/${repositorioAtual}`)


  if (data.id){ 
    
    const repositorioExiste = repositorios.find(repositorio => repositorio.id === data.id)

    
    if(!repositorioExiste){
    
    selecionandorepositorios( prev  => [...prev, data]);
    selecionandoReposAtual('');
    return
    };
  };

  alert('repositorio nao encontrado');

  

}

const removerRepositorio = (id) => {
  const atualizandoRepositorio = repositorios.filter(repositorio => repositorio.id !== id);
  selecionandorepositorios(atualizandoRepositorio);
}





  return (
    <Conteudo>
      <img alt="logo" src={gitLogo} width={72} height={72}/>
      <Input value ={repositorioAtual} onChange ={(e)=>selecionandoReposAtual(e.target.value)}/>
      <Button onClick={procurandoRepositorioUsuario}></Button>

      {repositorios.map(repositorio => <Repositorios removerRepositorio={removerRepositorio} repositorio={repositorio} />)}
    </Conteudo>
  );
}

export default App;
