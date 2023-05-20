import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Concert at Sea</title>
        <meta name="description" content="Página concurso de gatonegro" />
        <link rel="icon" href="/copa.png" />
        <link rel="apple-touch-icon" href="/ruta/a/la/imagen.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S8Y1RZ9KW6"
        ></script>
        <script src="/ga.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
