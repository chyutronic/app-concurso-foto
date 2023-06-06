import "@/styles/globals.css";
import "/public/fonts.css";
import { DataContextProvider } from "@/contexts/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}
