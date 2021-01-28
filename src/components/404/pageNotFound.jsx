import "./paginaNoEncontrada.css";
import { SiDiscogs } from "react-icons/si";

function error404() {

  return (
    <div className="error">
      <div className="disco_texto">
        {" "}
        4 <SiDiscogs style={{ fontSize: "0.8em" }} /> 4{" "}
      </div>
      <h2>PAGINA NO ENCONTRDA</h2>
    </div>
  );
}

export default error404;
