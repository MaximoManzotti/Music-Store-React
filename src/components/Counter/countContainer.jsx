import './Container.css';
import './counter';
import React from "react";
// import {useParams} from 'react-router-dom';
// import Instrumentos from '../ItemListContainer/ProductList/productlist';


function CountContainer({ count, add, less, quantity}) {
  // const { id } = useParams();
//  const [useProduct, setProduct] = useState()
// console.log(id)
//  let lista = Instrumentos.filter(guitarra => guitarra.id === Number(id));
//   console.log(lista)
  var qty = { quantity }
  return (

    <>

      <div className="Counter_Container">
        <button onClick={() => less()} disabled={count === 1 ? 'disabled' : null} className="Restar" >-</button>
        <p className='numero_producto'>{count}</p>
        <button onClick={() => add()} disabled={count === (qty.quantity - 0) ? 'disabled' : null} className="Sumar">+</button>

      </div>

    </>
  );
}
export default CountContainer
