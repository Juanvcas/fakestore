import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiImageOff } from 'react-icons/ci';
import { MdAddBox, MdBookmark } from 'react-icons/md';
import { useAllProducts, useLimitProducts } from '@hooks/useProducts';

const MainProductList = ({ offset = 0, limit = 0, classes }) => {
   const products = useLimitProducts(offset, limit);
   return (
      <>
         {products.map((item, index) => {
            return (
               <article key={index} className={classes.products}>
                  <div className={classes['products_image-cont']}>
                     <figure className={classes.products_image}>
                        {item?.images[0] ? <Image src={item?.images[0]} alt={item?.title} width={100} height={100} layout={'responsive'} /> : <CiImageOff className={classes['products-noimage']} />}
                        <MdBookmark className={classes['products-bookmark']} />
                     </figure>
                     <h4>{item?.category.name}</h4>
                     <h3>{item?.title}</h3>
                  </div>
                  <section className={classes.products_price}>
                     <p>{`$${item?.price}`}</p>
                     <MdAddBox />
                  </section>
               </article>
            );
         })}
         {/* {console.log(allProducts)} */}
      </>
   );
};

export default MainProductList;
