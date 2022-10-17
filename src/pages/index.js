import FloatFooter from '@components/FloatFooter';
import CategoryMenu from '@common/CategoryMenu';
import Head from 'next/head';
import { MdFilterAlt } from 'react-icons/md';
import MainProductList from '@components/MainProductList';
import s from '@styles/home.module.css';

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <main className={s.main}>
            <section className={s.categories}>
               <div className={s['categories-cont']}>
                  <CategoryMenu classes={s.catmenu} />
                  <MdFilterAlt />
               </div>
            </section>
            <section className={s['product-list']}>
               <div className={s['products-cont']}>
                  <MainProductList offset={5} limit={20} classes={s} />
               </div>
            </section>
         </main>
         <FloatFooter />
      </>
   );
}
