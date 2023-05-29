
import { Link } from 'react-router-dom';
import IconesOpcoes from '../IconesHeader'
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    background-color: #ffffffee;
    justify-content: center
`

function Header(){
return (
<HeaderContainer>
    <Link to="/">
        <Logo/>
    </Link>
    <OpcoesHeader/>
    <IconesOpcoes/>
</HeaderContainer>

)

}

export default Header;