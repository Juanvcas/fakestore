import Link from 'next/link';
import CategoryMenu from './CategoryMenu';
import s from '@styles/components/header.module.css';

const HeaderMenu = () => {
   return (
      <menu className={s.menu}>
         <section className={s['menu-links']}>
            <Link href={'/'}>Store</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>FAQ</Link>
         </section>
         <section className={s['menu-account']}>
            <Link href={'/'}>Account</Link>
            <Link href={'/'}>Bookmarks</Link>
         </section>
      </menu>
   );
};

export default HeaderMenu;
