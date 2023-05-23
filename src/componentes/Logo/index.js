import logo from '../../imagens/logo.svg'
import './estilos.css'


function Logo() {
return (
    <div className="logo">
        <img 
        src={logo} 
        alt="logo da empresa"
       className='logo-img'
       ></img>
        <p>Livraria <strong>Carrenas</strong></p>
</div>
)

}
export default Logo;
