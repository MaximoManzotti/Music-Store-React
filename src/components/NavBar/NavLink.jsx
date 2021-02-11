import {NavLink} from 'react-router-dom';

const NavItem = ({text, url = "#"}) => (

    <li className='lista'>
        <NavLink to={url} activeClassName="active"  className='Menu'>{text}</NavLink>
        </li>
)

export default NavItem;