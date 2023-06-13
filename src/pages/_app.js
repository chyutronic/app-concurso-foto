import "@/styles/globals.css";
import "/public/fonts.css";
import { DataContextProvider } from "@/contexts/DataContext";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }) {
  const gtmId = "GTM-MH7VL4R";

  const tagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}
