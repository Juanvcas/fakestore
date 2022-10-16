import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CiImageOff } from 'react-icons/ci';
import { useAllProducts, useLimitProducts } from '@hooks/useProducts';

const MainProductList = ({ offset = 0, limit = 0, classes }) => {
   const products = useLimitProducts(offset, limit);
   const allProducts = useAllProducts();
   return (
      <>
         {products.map((item, index) => {
            return (
               <article key={index} className={classes}>
                  {item?.images[0] ? <Image src={item?.images[0]} alt={item?.title} width={100} height={100} layout={'responsive'} /> : <CiImageOff />}
                  <h4>{item?.category.name}</h4>
                  <h3>{item?.title}</h3>
                  <p>{item?.price}</p>
               </article>
            );
         })}
         {/* {console.log(allProducts)} */}
      </>
   );
};

export default MainProductList;
