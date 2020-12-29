import { CgShoppingCart } from 'react-icons/cg';
import React , {useState}from 'react';

import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Carrito() {


  
 

  return(<> <CgShoppingCart className='Carrito'/>
  <ItemListContainer/> </>)};

export default Carrito;