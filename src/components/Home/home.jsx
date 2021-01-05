import './stylehome.css';
import Productos from '../ProductosCarousel/TodoslosProductos';
import { FaGuitar, FaDrum } from 'react-icons/fa';
import { GiGuitarBassHead, GiPartyHat} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function home(){

return(
  
       <div className='home'>
      <div className='txt_home'>
        <p className='titulo_home'>BAT MUSIC STORE</p>
        <p className='parrafo_home'>Feel The Power In Your Veins</p>
        </div>
        <h2>CATEGORIAS</h2>
        <div className='categoria'>
        <NavLink to={'/category/guitarras'} className='NavLinkHome'>  <div className='Icono_categoria'><FaGuitar style={{fontSize: '3em'}}/><p>GUITARRAS</p></div></NavLink>
        <NavLink to={'/category/bajos'}className='NavLinkHome'> <div className='Icono_categoria'><GiGuitarBassHead style={{fontSize: '3em'}}/> <p>BAJOS</p></div></NavLink>
        <NavLink to={'/category/baterias'}className='NavLinkHome'>  <div className='Icono_categoria'><FaDrum style={{fontSize: '3em'}}/> <p>BATERIAS</p></div></NavLink>
        <NavLink to={'/category/accesorios'}className='NavLinkHome'> <div className='Icono_categoria'><GiPartyHat style={{fontSize: '3em'}}/> <p>ACCESORIOS</p></div></NavLink>
        </div>
        <h2>PRODUCTOS</h2>
        <Productos/>
       </div>

)}
export default home