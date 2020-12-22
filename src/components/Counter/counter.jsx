import './Container.css';
import React, {useState} from 'react';
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
      <div className='count_container'>
        <CountContainer count={count} add={add} less={less} quantity={qty}/>
        <p className='Cantidad_Productos'>Cantidad de Productos: {qty}</p>
        <button className='agregar_al_carrito'>agregar al Carrito</button>
      </div>
      
    );
  }

  export default Contador