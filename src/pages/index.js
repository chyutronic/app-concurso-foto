import { DataContext } from "@/contexts/DataContext";
import { useContext, useState, useRef, useEffect } from "react";
import estilos from "./index.module.css";
import axios from "axios";
import Modal from "@/components/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import Pie from "@/components/Pie";
import ModalUploading from "@/components/ModalUploading";

function Home() {
  const {
    usuario,
    setUsuario,
    nombreArchivo,
    setNombreArchivo,
    setIntranet,
    logeado,
    setLogeado,
  } = useContext(DataContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [lugar_compra, setLugarCompra] = useState("");
  const [foto, setFoto] = useState(null);
  // const [nombreArchivo, setNombreArchivo] = useState("Nada seleccionado");
  const [modal, setModal] = useState(true);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  function handleFileSelect(event) {
    const file = event.target.files[0];
    setNombreArchivo(file?.name);
    setFoto(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (foto) {
        setUploading(true);
        if (captcha.current.getValue()) {
          let formulario = document.getElementById("formul");

          const formdata = new FormData();
          formdata.append("foto", foto);
          formdata.append("nombre", nombre);
          formdata.append("apellido", apellido);
          formdata.append("telefono", telefono);
          formdata.append("correo", correo);
          formdata.append("lugar_compra", lugar_compra);

          const res = await axios.post("api/usuarios", formdata);
          console.log(res);

          setFoto(null);
          setNombreArchivo("");
          setLogeado(true);
          formulario.reset();
          router.push("/cheers");
        } else {
          router.push("/");
        }
      } else {
        alert("Image missing...");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
    }
  };

  useEffect(() => {
    if (modal) {
      document.title = "Concert at Sea";
    } else {
      document.title = "Concert at Sea / Form";
    }

    if (logeado === true) {
      location.reload();
    }
  }, []);

  return (
    <div>
      <div className={estilos.contenedor}>
        <div>
          <div className={estilos.saludo}>
            Bedankt dat je <font color="black">GatoNegro</font> gekocht hebt!
          </div>
          <div>
            <h3 className={estilos.titulo}>
              Je kan nu deelnemen en misschien win je VIP{" "}
              <font color="red">TICKETS</font> voor Concert at Sea. We verloten
              2 x een set van 8 VIP tickets voor donderdag 22 juli 2023!
            </h3>
            <h3 className={estilos.titulo}>
              Vul het formulier hieronder in en geniet van de beste muziek met
              een glas wijn vol flavorrrrrr.
            </h3>
            <h3 className={estilos.titulo2}>
              **Let op, we vragen een foto van het aankoopbewijs (bon) aan het
              einde van het formulier**
            </h3>
          </div>
          <div className={estilos.contenedorFormulario}>
            <form
              onSubmit={handleSubmit}
              id="formul"
              encType="multipart/form-data"
              autoComplete="off"
            >
              <div align="center">
                <label className={estilos.titulo} htmlFor="nombre"></label>
                {/* <br></br> */}
                <input
                  className={estilos.input}
                  name="Nombre"
                  id="nombre"
                  type="text"
                  placeholder="Voornaam"
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
                  placeholder="Achternaam"
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
                  placeholder="Telefoonnummer"
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
                  placeholder="Email"
                  onChange={(e) => setCorreo(e.target.value)}
                  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
                  required
                ></input>
              </div>
              <div align="center">
                <label
                  className={estilos.titulo}
                  htmlFor="lugar_compra"
                ></label>
                {/* <br></br> */}
                <input
                  className={estilos.input}
                  name="Lugar_compra"
                  id="lugar_compra"
                  type="text"
                  placeholder="Supermarkt"
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
                  accept="image/png, image/jpeg, image/jpg"
                  // required
                ></input>
                <div>
                  <label htmlFor="archivo" className={estilos.contenedorLabel}>
                    <span className={estilos.inputFileBoton}>
                      Aankoopbewijs
                    </span>
                    <span className={estilos.inputFileNombre}>
                      {nombreArchivo}
                    </span>
                  </label>
                </div>
              </div>
              <div className={estilos.recaptcha}>
                <ReCAPTCHA
                  className={estilos.botonRecaptcha}
                  ref={captcha}
                  sitekey="6LeUwxEmAAAAAGbMAF70GpWuOnlO4V68a_JRWDlt"
                  onChange={onChange}
                />
              </div>
              <div className={estilos.contenedorBoton}>
                <button className={estilos.boton}>Verstuur! ►►</button>
              </div>
            </form>
          </div>
          {/* <div>
            <p>{usuario}</p>
          </div> */}
        </div>
        <Pie />
      </div>
      <Modal estado={modal} cambiarEstado={setModal} />
      <ModalUploading estado={uploading} cambiarEstado={setUploading} />
    </div>
  );
}

export default Home;
