import NavItem from './NavLink.jsx'

function Nav({titulo, action}) {
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
         menuItems.map((seccion, index) => <li> <NavItem key={index} text={seccion.texto} url={seccion.ruta}/></li>)  )
}

export default Nav;