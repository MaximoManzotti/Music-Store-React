import "./styleProducts.css";
import Loading from "../../assets/loading.gif";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrousel from "react-elastic-carousel";
import { getFirestore } from "../../DB";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Productos() {
       const db = getFirestore();


  const [items, setItems] = useState([]);
  let lista_productos = [];

  const getProducstFromDB = () => {
    db.collection("Productos")
      .get()
      .then((docs) => {
        docs.forEach((doc) => lista_productos.push({
               productos: doc.data(),
               id: doc.id
        }));
        setItems(lista_productos);
        console.log(lista_productos)
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProducstFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="contenedor_instrumentos_carrousel">
      {items.length > 0 ? (
        <>
          <Carrousel breakPoints={breakPoints}>
            {items.map((u, index) => (
              <Link to={`/items/${u.id}`} className="VerMas" key={index}>
                <div className="Producto" key={u.id}>
                  <p className="txt_producto">
                    {u.productos.Marca} {u.productos.Modelo}
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
          </Carrousel>
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
export default Productos;
