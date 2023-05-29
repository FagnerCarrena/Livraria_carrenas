import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcoes = styled.ul`
display: flex;
`
const Opcao = styled.li` 
height: 100%;
display: flex;
justify-content: center;
align-items: center;
min-width: 120px;
padding: 0 5px;
font-size: 16px;
text-align: center;
cursor: pointer;
`


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
return(
    <Opcoes>
          {textoOpcoes.map((item)=>(
            <Link to={`/${item.toLowerCase()}`}><Opcao key={item.id}><p>{item}</p></Opcao></Link> 
          ))}
        </Opcoes>
)

}

export default OpcoesHeader;