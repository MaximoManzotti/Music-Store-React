import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);

    data.items.forEach(e => {
       console.log( Number(e.id) )
    })
  
    return (
        <>
            <h1>Estás en el cart</h1>
            <h2>Cantidad total: {data.cantidad}</h2>
          {data.items.map(i => <h3>{i.product} - {i.cantidad}</h3>)}
        </>
    )
}

export default Cart;