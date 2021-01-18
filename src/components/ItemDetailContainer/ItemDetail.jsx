import "../ItemDetailContainer/itemDetailStyle.css";
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Instrumentos from ".././ItemListContainer/ProductList/productlist";
import Counter from "../Counter/counter";
import Loading from "../assets/loading.gif";
import { Store } from "../../store/index";
import { getFirestore } from "../../DB";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [data, setData] = useContext(Store);
  const history = useHistory();
  const db = getFirestore();

  function onAdd(count, product) {
    setData(db.collection('Productos').doc(id))
    if(data.items.length > 0){
    var itemInCart = data.items.some(i => i.id === id);
    }else{
     itemInCart = false
    }
    if(itemInCart){
      const newItems = [...data.items];
      newItems.forEach((i)=>{
        if(i.id === id){
          i.cantidad+= count;
        }
      })
      setData({
        items: newItems,
        cantidad: Number(data.items.reduce((acc, item) => acc+=item.cantidad, 0)),
        precioTotal: 0
      })
      console.log(data);
  } else {
     //si llegaste aca es porque el producto no se encuentra en el cart, por lo que podes agregarlo normalmente
  
    setData({
      ...data, 
      id: id ,     
      cantidad: JSON.stringify( data.cantidad + count),
      items: [...data.items, {product, cantidad: count, id:id}]
    });
    localStorage.setItem("Cart", JSON.stringify({
      ...data, 
      id: id , 
      cantidad:JSON.stringify( data.cantidad + count),
      items: [...data.items, {product, cantidad: count, id:id}]
    }));
  
  }  history.push("/cart");}


  const getProduct = new Promise((resolve, reject) => {
    const lista = Instrumentos.filter((detalle) => detalle.id === Number(id));
    const lista_resuelta = lista[0];
    resolve(lista_resuelta);
    // reject(alert('error'))
  });

  const getProducstFromDB = async () => {
    try {
      const result = await getProduct;
      setProduct(result);
    } catch (error) {
      alert("No podemos mostrar el producto");
    }
  };

  useEffect(() => {
    getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {product ? (
        <>
          <div className="contenedor_detail">
            <div className="contenedor_imagen">
              <img
                src={product.Imagen}
                alt="Guitarra"
                className="Imagen_Detail"
              />
            </div>
            <div className="div_producto">
              <p className="Titulo_Producto">
                {product.Marca} {product.Modelo}
              </p>
              <p className="Descripcion_producto">{product.descripcion}</p>
              <p style={{ justifyContent: "center", display: "flex" }}>
                {product.Precio}
              </p>
              <Counter
                Quantity={product.Quantity}
                onAdd={onAdd}
                product={`${product.Marca} ${product.Modelo}`}
              />
            </div>
          </div>
        </>
      ) : (
        <div>
          <img src={Loading} alt="Cargando..." />
          <p className="txt_cargando">Cargando</p>
        </div>
      )}
    </section>
  );
};
export default Detail;
