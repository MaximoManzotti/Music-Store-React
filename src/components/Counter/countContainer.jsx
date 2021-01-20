import './Container.css';
import './counter';
import React from "react";
// import {useParams} from 'react-router-dom';
// import Instrumentos from '../ItemListContainer/ProductList/productlist';


function CountContainer({ count, add, less, quantity, onAdd,product}) {
  
  var qty = { quantity }
  return (

    <>

      <div className="Counter_Container">
        <button onClick={() => less()} disabled={count === 1 ? 'disabled' : null} className="Restar" >-</button>
        <p className='numero_producto'>{count}</p>
        <button onClick={() => add()} disabled={count === (qty.quantity - 0) ? 'disabled' : null} className="Sumar">+</button>
      </div>
      <button
          className="agregar_al_carrito"
          onClick={()=>{onAdd(count, product)}}>
          <span id="span_1"></span>
          <span id="span_2"></span>
          <span id="span_3"></span>
          <span id="span_4"></span>
          AGREGAR AL CARRITO
        </button>
    </>
  );
}
export default CountContainer
