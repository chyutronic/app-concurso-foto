import axios from "axios";
import { useEffect, useState } from "react";

function Intranet() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function cargarUsuarios() {
      const res = await axios.get("api/usuarios");
      setUsuarios(res.data);
    }
    cargarUsuarios();
  }, []);

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <img
            src={usuario.foto}
            alt={usuario.nombre}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <h1>
            {usuario.nombre} {usuario.apellido}
          </h1>
          <p>{usuario.telefono}</p>
          <p>{usuario.correo}</p>
          <p>{usuario.lugar_compra}</p>
          <p>{usuario.creado}</p>
        </div>
      ))}
    </div>
  );
}

export default Intranet;
