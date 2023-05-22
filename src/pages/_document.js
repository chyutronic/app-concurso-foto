import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Concert at Sea</title>
        <meta name="description" content="Página concurso de gatonegro" />
        <link rel="icon" href="/copa.png" />
        <link rel="apple-touch-icon" href="/ruta/a/la/imagen.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S8Y1RZ9KW6"
          strategy="afterInteractive"
        />
        <Script async strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-S8Y1RZ9KW6");
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
