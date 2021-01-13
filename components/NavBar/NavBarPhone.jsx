import './NavBarStyles.css';
import {useState} from 'react';
import IconoCarrito from './CartWidget'
import NavItem from './NavMap'
function NavPhone() {
    const [showMenu, setshowMenu] = useState(false);

    const openshowMenu = () => {
        setshowMenu(!showMenu);
        barsMenu()
        
    }

    const [barMenu, setBarMenu] = useState(true);

     const barsMenu = () => {
        setBarMenu(!barMenu);
    }
    return (
        <>
        <div className={showMenu ? 'Pantallacompleta' : 'PantallaCompletaClose'} onClick={openshowMenu}>
            
        </div>
            <div className='Menu_Phone'>
            <a href='/cart' className="Menu_Carrito"><IconoCarrito/></a> 
                <div className='contenedor_bar'  onClick={openshowMenu} >
                    <div  className={barMenu ? 'bar_1'  :'x_1' }>.</div>
                    <div  className={barMenu ? 'bar_2'  :'x_2' }>.</div>
                    <div  className={barMenu ? 'bar_3'  :'x_3' }>.</div>
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