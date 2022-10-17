import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdMenu, MdMenuOpen, MdSearch, MdShoppingCart, MdShoppingBasket } from 'react-icons/md';
import HeaderMenu from '@common/HeaderMenu';
import s from '@styles/components/header.module.css';

const Header = () => {
   const [menu, setMenu] = useState(false);
   const [menuLogo, setMenuLogo] = useState(true);
   const handlerMenu = () => {
      setMenu(!menu);
   };
   useEffect(() => {
      if (window.innerWidth < 768) {
         setMenu(false);
      } else {
         setMenu(true);
         setMenuLogo(false);
      }
      window.addEventListener('resize', () => {
         if (window.innerWidth < 768) {
            setMenu(false);
            setMenuLogo(true);
         } else {
            setMenu(true);
            setMenuLogo(false);
         }
      });
   }, []);
   return (
      <header className={s.main}>
         <div className={s.cont}>
            {menuLogo && (
               <span className={s['menu-logo']} onClick={handlerMenu}>
                  {!menu ? <MdMenu /> : <MdMenuOpen />}
               </span>
            )}
            {menu && <HeaderMenu />}
            <section>
               <MdSearch className={s.search} />
               <MdShoppingCart className={s.cart} />
            </section>
         </div>
      </header>
   );
};

export default Header;
