import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [usuario, setUsuario] = useState("Juan");
  const [intranet, setIntranet] = useState(false);
  const [nombreArchivo, setNombreArchivo] = useState("Nada seleccionado");

  return (
    <DataContext.Provider
      value={{
        usuario,
        setUsuario,
        intranet,
        setIntranet,
        nombreArchivo,
        setNombreArchivo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
