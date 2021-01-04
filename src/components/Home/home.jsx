import './stylehome.css';
import Productos from '../ProductosCarousel/TodoslosProductos';
import { FaGuitar, FaDrum } from 'react-icons/fa';
import { GiGuitarBassHead, GiPartyHat } from 'react-icons/gi';

function home(){

return(
  
       <div className='home'>
      <div className='txt_home'>
        <h1 className='titulo_home'>BAT MUSIC STORE</h1>
        <p className='parrafo_home'>Fell The Power In Your Veins</p>
        </div>
        <div className='categoria'>
        <div className='Icono_categoria'><FaGuitar style={{fontSize: '3em'}}/><p>GUITARRAS</p></div>
        <div className='Icono_categoria'><GiGuitarBassHead style={{fontSize: '3em'}}/> <p>BAJOS</p></div>
        <div className='Icono_categoria'><FaDrum style={{fontSize: '3em'}}/> <p>BATERIAS</p></div>
        <div className='Icono_categoria'><GiPartyHat style={{fontSize: '3em'}}/> <p>ACCESORIOS</p></div>
        </div>

        <Productos/>
       </div>

)}
export default home