import "../ItemDetailContainer/itemDetailStyle.css";
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Instrumentos from ".././ItemListContainer/ProductList/productlist";
import Counter from "../Counter/counter";
import Loading from "../assets/loading.gif";
import { Store } from "../../store/index";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [data, setData] = useContext(Store);
  const history = useHistory();

  function onAdd(count, product) {
    setData({
      ...data,
      producto: {
        cantidad: data.cantidad + count,
        items: [...data.items, product]
      }

      
    });
    history.push("/cart");
    
  }
 
   
  localStorage.setItem("Cart",(`${data.items}${data.cantidad}`));
  // const [redirect, setRedirect] = useState(false);

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
