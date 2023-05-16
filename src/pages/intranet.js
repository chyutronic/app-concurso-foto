import estilos from "./intranet.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

function Intranet() {
  const [usuarios, setUsuarios] = useState([]);
  const { intranet } = useContext(DataContext);

  const router = useRouter();

  useEffect(() => {
    if (intranet === false) {
      router.push("/");
    }

    async function cargarUsuarios() {
      const res = await axios.get("api/usuarios");
      setUsuarios(res.data);
    }
    cargarUsuarios();
  }, []);

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
                  {/* <img
            src={usuario.foto}
            alt={usuario.nombre}
            style={{
              width: 150,
              height: 150,
            }}
          /> */}
                  <table className={estilos.tabla}>
                    <tbody>
                      <tr>
                        <td className={estilos.id}>{usuario.id}</td>
                        <td className={estilos.th}>{usuario.nombre}</td>
                        <td className={estilos.th}>{usuario.apellido}</td>
                        <td className={estilos.th}>{usuario.telefono}</td>
                        <td className={estilos.th}>{usuario.correo}</td>
                        <td className={estilos.th}>{usuario.lugar_compra}</td>
                        <td className={estilos.th}>{usuario.creado}</td>
                        <td className={estilos.th}>{usuario.foto}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intranet;
