import { CgShoppingCart } from 'react-icons/cg';
import React , {useState}from 'react';

import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Carrito() {

  const [showCartList, setshowCartList] = useState(false);
  const openCartList = () => {
      setshowCartList(!showCartList);   
  }
  
 

  return(<> <CgShoppingCart className='Carrito' onClick={openCartList} />
  <ItemListContainer show={showCartList}/> </>)};

export default Carrito;