import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="img/logo.svg" type="image/svg" />
      </Head>   
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
