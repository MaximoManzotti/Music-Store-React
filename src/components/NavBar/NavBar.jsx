import Murcielago_Logo from '../assets/bat_logo.svg';
import './NavBarStyles.css';
import IconoCarrito from './CartWidget'
import NavBar from './NavMap.jsx'

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
                        <NavBar/>
                        <li className='lista'><a href='/Carrito' className="Menu_Carrito"><IconoCarrito/></a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Header;