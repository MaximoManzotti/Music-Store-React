import "../ItemDetailContainer/itemDetailStyle.css";
import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Counter from "../Counter/counter";
import Loading from "../assets/loading.gif";
import { Store } from "../../store/index";
import { getFirestore } from "../../DB";

const Detail = () => {
  const { id } = useParams(); 
  const [data, setData] = useContext(Store);
  const history = useHistory();
  const db = getFirestore();
  console.log(data)
  function onAdd(count, product) {

  
    if(data.length > 0){
    var itemInCart = data.some(i => i.id === id);
    }else{
     itemInCart = false
    }
    if(itemInCart){
      const newItems = [data];
      newItems.forEach((i)=>{
        if(i.id === id){
          i.cantidad+= count;
        }
      })
      setData({
        items: newItems,
        cantidad: Number(data.reduce((acc, item) => acc+=item.cantidad, 0)),
        precioTotal: 0
      })
    } else {
      //si llegaste aca es porque el producto no se encuentra en el cart, por lo que podes agregarlo normalmente
     setData({
       ...data,
       id: id ,    
       cantidad: JSON.stringify( data.cantidad + count),
       items: {...data.items, product, cantidad: count, id:id}
     });
     localStorage.setItem("Cart", JSON.stringify({
      ...data.items, 
      id: id , 
      cantidad:JSON.stringify( data.cantidad + count),
      items: {...data.items, product, cantidad: count, id:id}
    }));
  
  }  history.push("/cart");}


  const getProduct = new Promise((resolve, reject) => {
    const getDoc = db.collection('Productos').doc(id).get();
    getDoc.then(doc => {
    resolve({id: doc.id, items:{products:doc.data()}})
    })
   
  });

  const getProducstFromDB = async () => {
    try {
      const result = await getProduct;
      console.log(result)
      setData(result);
    } catch (error) {
      alert("No podemos mostrar el producto");
    }
  };

  useEffect(() => {
    getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const mostrar = data.items.products
  return (
    <section>
      {mostrar ? (
        <>
          <div className="contenedor_detail">
            <div className="contenedor_imagen">
              <img
                src={mostrar.Imagen}
                alt="Guitarra"
                className="Imagen_Detail"
              />
            </div>
            <div className="div_producto">
              <p className="Titulo_Producto">
                {mostrar.Marca} {mostrar.Modelo}
              </p>
              <p className="Descripcion_producto">{mostrar.descripcion}</p>
              <p style={{ justifyContent: "center", display: "flex" }}>
                {mostrar.Precio}
              </p>
              <Counter
                Quantity={mostrar.Quantity}
                onAdd={onAdd}
                product={`${mostrar.Marca} ${mostrar.Modelo}`}
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
