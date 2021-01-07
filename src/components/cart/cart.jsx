import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);

    return (
        <>
            <h1>Estás en el cart</h1>
          {( data.items.map(e => <h2>{e}</h2>))}
        
        </>
    )
}

export default Cart;