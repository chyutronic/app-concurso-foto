import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [usuario, setUsuario] = useState("Juan");
  const [intranet, setIntranet] = useState(false);

  return (
    <DataContext.Provider
      value={{ usuario, setUsuario, intranet, setIntranet }}
    >
      {children}
    </DataContext.Provider>
  );
}
