import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [usuarioEncontrado, setUsuarioEncontrado] = useState("Juan");
  const [intranet, setIntranet] = useState(false);
  const [nombreArchivo, setNombreArchivo] = useState("FILENAME.JPG");
  const [logeado, setLogeado] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [idSelect, setIdSelect] = useState(null);

  return (
    <DataContext.Provider
      value={{
        usuarioEncontrado,
        setUsuarioEncontrado,
        intranet,
        setIntranet,
        nombreArchivo,
        setNombreArchivo,
        logeado,
        setLogeado,
        usuarios,
        setUsuarios,
        idSelect,
        setIdSelect,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
