import './NavBarStyles.css';
import {useState} from 'react';
import IconoCarrito from './CartWidget'

function NavPhone() {
    const [showMenu, setshowMenu] = useState(false);

    const openshowMenu = () => {
        setshowMenu(!showMenu);
    }
    return (
        <>
            <div className='Menu_Phone'>
                <IconoCarrito/>
                <div className='contenedor_bar'  onClick={openshowMenu} >
                    <div className='bar_1'>.</div>
                    <div className='bar_2'>.</div>
                    <div className='bar_3'>.</div>
                    </div>
                    <nav className={showMenu ? 'Nav_contenedor' : 'Nav_contenedor_close' }>
                        <ul className="Ul_Phone">
                            <li className='lista'><a href="#Inicio" className='Menu'>Inicio</a></li>
                            <li className='lista'><a href="#Guitarras" className='Menu'>Guitarras</a></li>
                            <li className='lista'><a href="#Bajos" className='Menu'>Bajos</a></li>
                            <li className='lista'><a href="#Baterias" className='Menu'>Baterias</a></li>
                            <li className='lista'><a href="#Accesorios" className='Menu'>Accesorios</a></li>
                        </ul>
                    </nav>
                </div>
        </>
    )
}

export default NavPhone;