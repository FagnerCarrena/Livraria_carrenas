import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteFavoritos, getFavoritos } from '../servicos/favoritos';

import livroImg from '../imagens/livro.png'





const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, green 35%, yellow);
 `
 const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`
const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

async function fetchFavoritos(){
const  favoritosDaApi = await getFavoritos()
setFavoritos(favoritosDaApi)

  }

  async function deleteFavorito(id){
   await deleteFavoritos(id) 
   await fetchFavoritos()
   alert(`livro de id ${id} deletado com sucesso`)

  }

  useEffect(()=>{
    fetchFavoritos()
  }, [])


  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros Favoritos</Titulo>
<ResultadoContainer>
     {favoritos.map(favorito=> (
      <Resultado onClick={()=> deleteFavorito(favorito.id)}>
        <img src={livroImg} alt='fotoLivro'/>
        <p>{favorito.nome}</p>
 
        </Resultado>
        ))}

</ResultadoContainer>
      </div> 
     </AppContainer>
   
  );
}

export default Favoritos;
