

import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa';




const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, green 35%, yellow);
 `

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
      
     </AppContainer>
   
  );
}

export default Favoritos;
