import {useContext} from 'react';
import {Store} from '../../store';
import {ImCross} from "react-icons/im";

const Cart = () => {

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);
    const copyData = data;
    // console.log(JSON.stringify(copyData));

   

    
function deleteItem (id){
 let lista_filtrada =  copyData.items.filter(e => e.id === id);
copyData.items.shift(lista_filtrada)
setData(copyData)
console.log(copyData)
}
    return (
        <>
            <h1>Estás en el cart</h1>
            <h2>Cantidad total: {data.cantidad}</h2>
           
          {data.items.map(i => <h3>{i.product} - {i.cantidad} <ImCross onClick={()=> {deleteItem(i.id)}} /> </h3>)}
        </>
    )
}

export default Cart;