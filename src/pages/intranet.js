import estilos from "./intranet.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "@/contexts/DataContext";
import MostrarFoto from "@/components/MostrarFoto";
import ModalIntranet from "@/components/ModalIntranet";

function Intranet() {
  const {
    usuarios,
    setUsuarios,
    idSelect,
    setIdSelect,
    intranet,
    setIntranet,
  } = useContext(DataContext);

  const { push, query } = useRouter();

  useEffect(() => {
    console.log(intranet);
    // setIntranet(true);
    if (!intranet) {
      setIntranet(true);
    } else {
      setIntranet(false);
    }
    async function cargarUsuarios() {
      const res = await axios.get("api/usuarios");
      setUsuarios(res.data);
    }
    cargarUsuarios();
  }, []);

  function mostrarFoto(user) {
    setIdSelect(user);
    push("/edit/" + user);
  }

  return (
    <>
      <div className={estilos.contenedor}>
        <div>
          <div>
            <h1 className={estilos.titulo}>HISTORIAL DE USUARIOS</h1>
            <p className={estilos.texto}>
              Aquí se muestra el historial de todos los usuarios que han usado
              la aplicación
            </p>
          </div>
          <div>
            <table className={estilos.tabla}>
              <tbody>
                <tr>
                  <th className={estilos.id}>ID</th>
                  <th className={estilos.th}>NOMBRE</th>
                  <th className={estilos.th}>APELLIDO</th>
                  <th className={estilos.th}>TELÉFONO</th>
                  <th className={estilos.th}>CORREO</th>
                  <th className={estilos.th}>LUGAR COMPRA</th>
                  <th className={estilos.th}>FOTO</th>
                  <th className={estilos.th}>CREADO</th>
                </tr>
              </tbody>
            </table>
            <div>
              {usuarios.map((usuario) => (
                <div key={usuario.id}>
                  <table className={estilos.tabla}>
                    <tbody>
                      <tr onClick={() => mostrarFoto(usuario.id)}>
                        <td className={estilos.id}>{usuario.id}</td>
                        <td className={estilos.th}>{usuario.nombre}</td>
                        <td className={estilos.th}>{usuario.apellido}</td>
                        <td className={estilos.th}>{usuario.telefono}</td>
                        <td className={estilos.th}>{usuario.correo}</td>
                        <td className={estilos.th}>{usuario.lugar_compra}</td>
                        <td className={estilos.th}>{usuario.foto}</td>
                        <td className={estilos.th}>{usuario.creado}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalIntranet estado={intranet} cambiarEstado={setIntranet} />
    </>
  );
}

export default Intranet;
