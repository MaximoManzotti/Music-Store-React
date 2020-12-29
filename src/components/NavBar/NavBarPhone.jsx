import './NavBarStyles.css';
import {useState} from 'react';
import IconoCarrito from './CartWidget'
import NavItem from './NavMap'
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
                           <NavItem/>
                        </ul>
                    </nav>
                </div>
        </>
    )
}

export default NavPhone;