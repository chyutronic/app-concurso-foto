import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [usuario, setUsuario] = useState("Juan");
  const [intranet, setIntranet] = useState(false);
  const [nombreArchivo, setNombreArchivo] = useState("FILENAME.JPG");
  const [logeado, setLogeado] = useState(false);

  return (
    <DataContext.Provider
      value={{
        usuario,
        setUsuario,
        intranet,
        setIntranet,
        nombreArchivo,
        setNombreArchivo,
        logeado,
        setLogeado,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
