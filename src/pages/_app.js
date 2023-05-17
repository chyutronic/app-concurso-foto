import "@/styles/globals.css";
import "/public/fonts.css";

import { DataContextProvider } from "@/contexts/DataContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Head>
        <title>concert at sea - GatoNegro</title>
        <meta name="description" content="Página concurso de gatonegro" />
        <link rel="icon" href="/copa.png" />
        <link rel="apple-touch-icon" href="/ruta/a/la/imagen.png" />
      </Head>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}
