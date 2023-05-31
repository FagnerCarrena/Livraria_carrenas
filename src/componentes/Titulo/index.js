import  styled  from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props=> props.corFundo || "#FFF"};
    color: ${props=> props.cor || "green"} ;
    font-size: ${props=> props.tamanhoFonte || "18px"} 
    text-align: ${props=> props.alinhamento || "center"} 
    margin: 0;
`