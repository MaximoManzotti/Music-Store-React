import "../ItemDetailContainer/itemDetailStyle.css";
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Contador from "../Counter/counter";
import { Store } from "../../store/index";
import { getFirestore } from "../../DB";
import Loading from "../../assets/loading.gif"


const Detalle = () => {
  const { id } = useParams(); 
  const [data, setData] = useContext(Store);
  const [item, setItem] = useState({})
  const [exist, setExist] = useState(true)
  const history = useHistory();
  const db = getFirestore();
  

  function Agregar(count, product ) {
    let itemInCart = false;
    if(data.items.length > 0){
        itemInCart = data.items.some(i => i.id === id);
    } else{
      itemInCart = false
    }
    if(itemInCart){
      const newItems = [...data.items];
      newItems.forEach((i)=>{
        if(i.id === id){
          i.cantidad += count;
        }
      })
      setData({
        items: newItems, product,
        cantidad: Number(data.items.reduce((acc, item) => acc += item.cantidad, 0)),
        precio:  data.items.Precio,
       
      })
    } else {
      //si llegaste aca es porque el producto no se encuentra en el cart, por lo que podes agregarlo normalmente        
        setData({
            ...data,
            cantidad:  data.cantidad + count,
            items: [...data.items, {...item,product, cantidad: count,}],
            precio:  data.items.Precio,
    
        });
        localStorage.setItem("Cart", JSON.stringify({
          ...data,
          cantidad:  data.cantidad + count,
          items: [...data.items, {...item,product, cantidad: count}],
          precio: data.items.Precio,

        }));
    }  
    history.push("/cart");
  }


  const getProduct = new Promise((resolve, reject) => {
    const getDoc = db.collection('Productos').doc(id).get();
    getDoc.then(doc => {
      setExist(doc.exists)
    resolve({id: doc.id, ...doc.data()})
    })
   
  });

  const ProductosDeDB = async () => {
    try {
      const result = await getProduct;
      setItem(result);
      
    } catch (error) {
      alert("No podemos mostrar el producto");
    }
  };

  useEffect(() => {
    ProductosDeDB();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if(exist === true){
return(
  <section>
  { item ? (
    <> 
      <div className="contenedor_detail">
        <div className="contenedor_imagen">
          <img
            src={item.Imagen}
            alt="Guitarra"
            className="Imagen_Detail"
          />
        </div>
        <div className="div_producto">
          <p className="Titulo_Producto">
           {item.Marca} {item.Modelo}
          </p>
          <p className="Descripcion_producto">{item.descripcion}</p>
          <p style={{ justifyContent: "center", display: "flex" }}>
            ${item.Precio}
          </p>
          <Contador
            Quantity={item.Quantity}
            onAdd={Agregar}
            product={`${item.Marca} ${item.Modelo}`}
          />
        </div>
      </div>
    </>):(
      <Loading/>
    )}
</section>
)
  }else if(exist === false){

  return(
    <p>El Producto No a sido encontrado</p>
  )
  }
 
}

export default Detalle;
