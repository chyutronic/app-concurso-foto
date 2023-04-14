import { DataContext } from "@/contexts/DataContext";
import { useContext, useState } from "react";
import estilos from "./index.module.css";

function Home() {
  const { usuario, setUsuario } = useContext(DataContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState();
  const [correo, setCorreo] = useState();
  const [lugarCompra, setLugarCompra] = useState();
  const [nombreArchivo, setNombreArchivo] = useState("Nada seleccionado");

  function handleFileSelect(event) {
    const file = event.target.files[0];
    setNombreArchivo(file.name);
  }

  return (
    <>
      <div className={estilos.contenedor}>
        <div className={estilos.contenedorFormulario}>
          <form>
            <div align="center">
              <label className={estilos.titulo} htmlFor="nombre"></label>
              {/* <br></br> */}
              <input
                className={estilos.input}
                name="Nombre"
                id="nombre"
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              ></input>
            </div>
            <div align="center">
              <label className={estilos.titulo} htmlFor="apellido"></label>
              {/* <br></br> */}
              <input
                className={estilos.input}
                name="Apellido"
                id="apellido"
                type="text"
                placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
                required
              ></input>
            </div>
            <div align="center">
              <label className={estilos.titulo} htmlFor="telefono"></label>
              {/* <br></br> */}
              <input
                className={estilos.input}
                name="Telefono"
                id="telefono"
                type="text"
                placeholder="9XXXXXXXX"
                onChange={(e) => setTelefono(e.target.value)}
                required
              ></input>
            </div>
            <div align="center">
              <label className={estilos.titulo} htmlFor="correo"></label>
              {/* <br></br> */}
              <input
                className={estilos.input}
                name="Correo"
                id="correo"
                type="email"
                placeholder="tu@correo.com"
                onChange={(e) => setCorreo(e.target.value)}
                pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
                required
              ></input>
            </div>
            <div align="center">
              <label className={estilos.titulo} htmlFor="lugar_compra"></label>
              {/* <br></br> */}
              <input
                className={estilos.input}
                name="Lugar_compra"
                id="lugar_compra"
                type="text"
                placeholder="lugar de compra"
                onChange={(e) => setLugarCompra(e.target.value)}
                required
              ></input>
            </div>
            <div align="center" className={estilos.contenedorInputFile}>
              <input
                className={estilos.inputFile}
                type="file"
                id="archivo"
                onChange={handleFileSelect}
                accept="image/png, image/jpeg"
              ></input>
              <div>
                <label htmlFor="archivo" className={estilos.contenedorLabel}>
                  <span className={estilos.inputFileBoton}>Buscar archivo</span>
                  <span className={estilos.inputFileNombre}>
                    {nombreArchivo}
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
        {/* <div>
            <p>{usuario}</p>
          </div> */}
      </div>
    </>
  );
}

export default Home;
