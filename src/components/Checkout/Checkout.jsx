import './Checkout_Style.css'
import { useContext, useState } from "react";
import { Store } from "../../store/index";


function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(Store);
    const [form , setForm] = useState({
nombre:'',
apellido:'',
email:'',
telefono:'',
tarjeta:'',
expiracion:'',
codigo_seguridad:''
    })
const handleChangeInput = (e) =>{ 
    setForm({
      ...form , [e.target.nombre]: e.target.value  
     } )
  }
  console.log(form)


    
    return(
<form className="Formulario">




    <input type="text" value={form.nombre} name="Nombre" placeholder="Nombre" onChange={handleChangeInput}/>
 
    <input type="text" value={form.apellido} name="Apellido" placeholder="Apellido"  onChange={handleChangeInput}/>

    <input type="text" value={form.email} name="Email" placeholder="Email"  onChange={handleChangeInput}/>
 
    <input type="text" value={form.telefono} name="Telefono" placeholder="Telefono"  onChange={handleChangeInput}/>

    <input type="text" value={form.tarjeta} name="Tarjeta" placeholder="Tarjeta"  onChange={handleChangeInput}/>

    <input type="text" value={form.expiracion} name="FechaExpiracion" placeholder="Fecha de Expiracion"  onChange={handleChangeInput}/>

    <input type="text" value={form.codigo_seguridad} name="CodigoSeguridad" placeholder="Codigo de Seguridad"  onChange={handleChangeInput} />

  <button>Pagar</button>
</form>
    )
}

export default Checkout