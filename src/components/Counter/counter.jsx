import './Container.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CountContainer from './countContainer';
import '../ItemListContainer/Guitarras/guitarras';


function Contador({Quantity}) {
    const [count, setCount] = useState(1);

    const qty = Quantity;
   
    const add = () => {
      if (count < qty) {
        setCount(count + 1);
      }
      if (count === qty) {
        alert("Solo tengo eso en stock");
      }
    }; 
  
    const less = () => {
      if (count === 1) {
        alert("No se puede menos de 1");
        return;
      }
  
      setCount(count - 1);
    };
    return (
      <div className='count_display'>
      <div className='count_container'>
        <p className='Cantidad_Productos'>Disponibilidad de Productos: {qty}</p>
        <CountContainer count={count} add={add} less={less} quantity={qty}/>
        <Link to='/cart'><button className='agregar_al_carrito'>Agregar al Carrito</button></Link>
      </div>
      </div>
      
    );
  }

  export default Contador