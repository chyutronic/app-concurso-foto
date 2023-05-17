import estilos from "./ModalUploading.module.css";

function ModalUploading({ estado, cambiarEstado }) {
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
                <p className={estilos.texto}>Uploading...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalUploading;
