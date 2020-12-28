import NavItem from './NavLink.jsx'

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Guitarras',
            ruta: '/Guitarras',
        },
        {
            texto: 'Bajos',
            ruta: '/Bajos',
        },
        {
            texto:'Baterias',
            ruta: '/Baterias',
        },
        {
            texto:'Accesorios',
            ruta: '/Accesorios',
        },
    ]
    return (
         menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)  )
}

export default Nav;