import { Html, Head, Main, NextScript } from 'next/document';

const _document = () => {
   return (
      <Html>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet" />
         </Head>
         <body>
            <Main></Main>
            <NextScript></NextScript>
         </body>
      </Html>
   );
};

export default _document;
