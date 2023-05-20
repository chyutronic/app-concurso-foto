import "@/styles/globals.css";
import "/public/fonts.css";

import { DataContextProvider } from "@/contexts/DataContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}
