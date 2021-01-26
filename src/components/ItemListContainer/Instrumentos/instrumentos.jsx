import "../../ItemListContainer/style_Instrumentos.css";
import Loading from "../../../assets/loading.gif";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../../DB";

function Instrumento() {
  const [items, setItems] = useState([]);
  const { instrumentos } = useParams();
  const db = getFirestore();
  let lista_productos = [];
  

  const getProducts = () => {
    db.collection('Productos').where('categoria', '==', instrumentos).get()
  .then((docs) => {
    docs.forEach((doc) => lista_productos.push({
           productos: doc.data(),
           id: doc.id
    }));
    setItems(lista_productos);
  })}

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instrumentos])

  return (
    <section className="contenedor_instrumentos">
      {items.length > 0 ? (
        <>
          {items.map((u, index ) => (
            <Link to={`/items/${u.id}`} className="VerMas" key={index} >
              <div className="Producto" key={u.id}>
                <p className="txt_producto">
                  {u.Marca} {u.productos.Modelo}
                </p>
                <img
                  src={u.productos.Imagen}
                  alt="Guitarra"
                  className="Foto_instrumento"
                />
                <p className="txt_producto">{u.productos.Precio}</p>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <div>
          <img src={Loading} alt="Cargando..." />
          <p className="txt_cargando">Cargando</p>
        </div>
      )}
    </section>
  );
}
export default Instrumento;
