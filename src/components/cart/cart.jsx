import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);
    console.log(localStorage.getItem('Cart'))
    return (
        <>
            <h1>Estás en el cart</h1>
          <h2>{localStorage.getItem('Cart')}</h2>
        
        </>
    )
}

export default Cart;