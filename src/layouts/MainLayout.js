import Header from '@components/Header';
import { defaultHead } from 'next/head';

const MainLayout = ({ children }) => {
   return (
      <>
         <Header />
         {children}
      </>
   );
};

export default MainLayout;
