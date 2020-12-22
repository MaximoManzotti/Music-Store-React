import Murcielago_Logo from '../assets/bat_logo.svg';
import './NavBarStyles.css';
import IconoCarrito from './CartWidget'

function Header() {
    return (
        <>
            <div className="logo_menu">
                <div className='LogoyMarca'>
                    <img className='Logo_murcielago' src={Murcielago_Logo} alt="murcielago" />
                    <h1 className='Nombre_marca'>Music Store</h1>
                </div>
                <nav className='Nav_contenedor_Pc'>
                    <ul >
                        <li className='lista'><a href="#Inicio" className='Menu'>Inicio</a></li>
                        <li className='lista'><a href="#Guitarras" className='Menu'>Guitarras</a></li>
                        <li className='lista'><a href="#Bajos" className='Menu'>Bajos</a></li>
                        <li className='lista'><a href="#Baterias" className='Menu'>Baterias</a></li>
                        <li className='lista'><a href="#Accesorios" className='Menu'>Accesorios</a></li>
                        <li className='lista'><a href='#Carrito' className="Menu_Carrito"><IconoCarrito  /></a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Header;