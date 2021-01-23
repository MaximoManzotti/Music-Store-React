import "./Checkout_Style.css";
import { useContext, useState } from "react";
import { Store } from "../../store/index";
import { getFirestore } from "../../DB/index"
import firebase from 'firebase/app';

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(Store);
  const [venta, completoVenta] = useState(false)
  const [idCompra, setIdCompra] = useState('');
  const db = getFirestore();
    const orders = db.collection("Ventas")
  
console.log(data)

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmacionemail: "",
    telefono: "",
    tarjeta: "",
    expiracion: "",
    codigoseguridad: "",
  });

  // const handleChangeInput = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const set = (name) => {
    return ({ target: { value } }) => {
      setForm((oldform) => ({ ...oldform, [name]: value }));
    };
  };

  const ventas = {
     users: form,
     items: data.items,
     total: data.total,
     data: firebase.firestore.Timestamp.fromDate( new Date())
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
  orders.add(ventas)
  .then( ({id})=> {
    completoVenta(true);
    setIdCompra(id);
})
.catch(e => console.log(e));
}

  return (
    !venta ? (
    <form className="Formulario" 
    onSubmit={handleSubmitForm}>
      <input
        required min="2"
        type="text"
        value={form.nombre}
        name="nombre"
        placeholder="Nombre"
        onChange={set("nombre")}
        
      />

      <input   
        required 
        type="text"
        value={form.apellido}
        name="apellido"
        placeholder="Apellido"
        onChange={set("apellido")}
       />

      <input
      required
        type="text"
        value={form.email}
        name="email"
        placeholder="Email"
        onChange={set("email")} 
      />
      <input
        required
        type="text"
        value={form.confirmacionemail}
        name="confirmacionemail"
        placeholder="Confirmacion Email"
        onChange={set("confirmacionemail")}
      />
      <input
        required
        type="text"
        value={form.telefono}
        name="telefono"
        placeholder="Telefono"
        onChange={set("telefono")}
      />

      <input
        required
        type="text"
        value={form.tarjeta}
        name="tarjeta"
        placeholder="Tarjeta"
        onChange={set("tarjeta")}
      />

      <input
       required
        type="text"
        value={form.expiracion}
        name="expiracion"
        placeholder="Fecha de Expiracion"
        onChange={set("expiracion")}
      />

      <input
       required
        type="text"
        value={form.codigoseguridad}
        name="codigoseguridad"
        placeholder="Codigo de Seguridad"
        onChange={set("codigoseguridad")}     
         />

      <button type="submit">Pagar</button>
    </form>) : (
                  <p>  La compra se realizó correctamente, tu  código de seguimiento es: {idCompra} </p>
   ) );
}

export default Checkout;
