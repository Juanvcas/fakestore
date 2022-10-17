import Link from 'next/link';
import { MdHome, MdBookmarks, MdPerson } from 'react-icons/md';
import s from '@styles/components/floatfooter.module.css';

const FloatFooter = () => {
   return (
      <aside className={s.main}>
         <section className={s.cont}>
            <Link href={'/'}>
               <a>
                  <MdHome />
                  <p>Home</p>
               </a>
            </Link>
            <Link href={'/'}>
               <a>
                  <MdBookmarks />
                  <p>Bookmarks</p>
               </a>
            </Link>
            <Link href={'/'}>
               <a>
                  <MdPerson />
                  <p>Profile</p>
               </a>
            </Link>
         </section>
      </aside>
   );
};

export default FloatFooter;
