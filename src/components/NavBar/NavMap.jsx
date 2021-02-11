import NavItem from './NavLink.jsx'
import './NavBarStyles.css'

function Navegar({titulo, action}) {
    const menuItems = [
        {
            texto: 'guitarras',
            ruta: '/guitarras',
        },
        {
            texto: 'bajos',
            ruta: '/bajos',
        },
        {
            texto:'baterias',
            ruta: '/baterias',
        },
        {
            texto:'accesorios',
            ruta: '/accesorios',
        },
    ]

    return (
        <ul className="ul_nav">
        { menuItems.map((seccion, index) =><NavItem key={index}  text={seccion.texto} url={`/category${seccion.ruta}`}/>)}
         </ul>
    )}

export default Navegar;