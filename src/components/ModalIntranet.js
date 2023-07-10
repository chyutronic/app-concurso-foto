import estilos from "./ModalIntranet.module.css";
import { useState } from "react";

function ModalIntranet({ estado, cambiarEstado }) {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");

  const usuarioIntranet = process.env.NEXT_PUBLIC_INTRANET_USER;
  const claveIntranet = process.env.NEXT_PUBLIC_INTRANET_PASS;

  function handleSubmit() {
    if (nombre === usuarioIntranet && clave === claveIntranet) {
      cambiarEstado(false);
    }
    console.log(usuarioIntranet);
    console.log(claveIntranet);
  }

  return (
    <>
      {estado && (
        <div className={estilos.ventanaModal}>
          <div className={estilos.contenedorModal}>
            <div className={estilos.contenedor}>
              <div>
                <img className={estilos.logo} src="catsGatoVolador.svg"></img>
              </div>
              <div>
                <p className={estilos.texto}>Debe autenticarse...</p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className={estilos.contenedorFormulario}>
                    <div>
                      <input
                        className={estilos.input}
                        name="nombre"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div>
                      <input
                        className={estilos.input}
                        name="clave"
                        id="clave"
                        type="text"
                        placeholder="Clave"
                        onChange={(e) => setClave(e.target.value)}
                        required
                      ></input>
                    </div>
                    <button className={estilos.boton} type="submit">
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalIntranet;
