import {useContext} from 'react';
import {Store} from '../../store';
import {ImCross} from "react-icons/im";

const Cart = () => {

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);
    // const copyData = [data];
    // console.log(JSON.stringify(copyData));
    
   

    
// function deleteItem (id){
//     let lista_filtrada =  copyData[0].items.filter(e => e.id === id);
//     let eliminar = lista_filtrada.shift()
//     console.log(eliminar)}
    
//  if (lista_filtrada > 1){
    // let unicos = Array.from(new Set(copyData[0].items))

// console.log(unicos)


    return (
        <>
            <h1>Estás en el cart</h1>
            <h2>Cantidad total: {data.cantidad}</h2>
           
          {data.items.map(i => <h3>{i.product} - {i.cantidad} <ImCross onClick={()=> data.shift(0)} /> </h3>)}
        </>
    )
}

export default Cart;