import MainLayout from '@layouts/MainLayout';
import '../styles/globals.css';

function Fakestore({ Component, pageProps }) {
   return (
      <MainLayout>
         <Component {...pageProps} />
      </MainLayout>
   );
}

export default Fakestore;
