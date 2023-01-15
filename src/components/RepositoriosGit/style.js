import styled from 'styled-components';

export const RepositoriosConteudo = styled.div`
        
        height:auto;
        display:flex;
        flex-direction:column;
        

        h3{
            font-size:32px;
            color:#fafafa;
            text-align:center;
           
            
        }

        p{
            font-size:12px;
            text-align:center;
            color:#FAFAFA60;
            margin:1rem 0 1rem 0;
           
        }
        a{
            text-decoration:none;
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:8rem;
            text-align:center;
            justify-content:center;
            margin:1rem 0rem 0rem 4em;
            position:relative;
            
            

        }
        a.ver{
            display:flex;
            flex-direction:column;
            background-color:#ffffff;
            border:5px transparent #Ffffff;
            border-radius:25px;
            text-align:center;
            color:#0000ff;
            &:hover{
            background-color:#FAFAFA60;
        }
        
         
           
        }

        a.remover{
           background-color:#ffffff;
           border:5px transparent #Ffffff;
           border-radius:25px;
           text-align:center;
            color:#FF0000;
           
            


            &:hover{
                background-color:#FAFAFA60;
            }

           
        }
        hr{
            color:#f589;
            margin:1rem 0;
            width:100%;
           
        }
    
`