import { useState, useContext, useEffect } from "react";
import estilos from "./MostrarFoto.module.css";
import { useRouter } from "next/router";
import { DataContext } from "@/contexts/DataContext";

function MostrarFoto() {
  const {
    intranet,
    usuarios,
    setUsuarios,
    idSelect,
    usuarioEncontrado,
    setUsuarioEncontrado,
  } = useContext(DataContext);
  const router = useRouter();

  const salir = () => {
    router.push("/intranet");
  };

  useEffect(() => {
    const userFound = usuarios.find((usuario) => usuario.id === idSelect);
    setUsuarioEncontrado(userFound);
  }, []);

  return (
    <>
      <div>
        <div className={estilos.ventanaModal}>
          <div className={estilos.contenedorModal}>
            <div className={estilos.contenedorInfo}>
              <div className={estilos.contenedorImagen}>
                <img
                  src={"/" + usuarioEncontrado.foto}
                  style={{
                    width: 400,
                    height: 400,
                  }}
                  alt="foto cargada"
                ></img>
              </div>
              <div>
                <p>{usuarioEncontrado.foto}</p>
                <p>{usuarioEncontrado.nombre}</p>
                <p>{usuarioEncontrado.apellido}</p>
                <p>{usuarioEncontrado.telefono}</p>
                <p>{usuarioEncontrado.correo}</p>
                <p>{usuarioEncontrado.lugar_compra}</p>
                <p>{usuarioEncontrado.creado}</p>
              </div>
              <div>
                <button className={estilos.boton} onClick={salir}>
                  CERRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MostrarFoto;
