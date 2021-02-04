import "../../ItemListContainer/style_Instrumentos.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../../DB";

function Instrumento() {
  const [items, setItems] = useState([]);
  const { instrumentos: instrument } = useParams();
  const db = getFirestore();
  let productList = [];

  const TraerProductos = () => {
    db.collection("Productos")
      .where("categoria", "==", instrument)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (doc.data().Quantity > 0) {
            productList.push({
              productos: doc.data(),
              id: doc.id,
            });
          }
        });
        setItems(productList);
      });
  };

  useEffect(() => {
    TraerProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instrument]);

  return (
    <section className="contenedor_instrumentos">
      {items.length ? (
        <>
          {items.map((u, index) => (
            <Link to={`/items/${u.id}`} className="ver_mas" key={index}>
              <div className="Producto" key={u.id}>
                <p className="txt_producto">
                  {u.Marca} {u.productos.Modelo}
                </p>
                <img
                  src={u.productos.Imagen}
                  alt="Guitarra"
                  className="Foto_instrumento"
                />
                <p className="txt_producto">${u.productos.Precio}</p>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <p>Categoria no encontrado</p>
      )}
    </section>
  );
}
export default Instrumento;
