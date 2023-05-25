import logo from '../../imagens/dog.png'
import styled from 'styled-components'


const LogoContainer = styled.div`
display: flex;
    font-size: 30px;
    align-items: center;
`

const LogoImage = styled.img `
margin-right: 10px;
width: 70px;
`

function Logo() {
return (
    <LogoContainer>
        <LogoImage
        src={logo} 
        alt="logo da empresa"
       />
        <p>Livraria <strong>Carrenas</strong></p>
</LogoContainer>
)

}
export default Logo;
