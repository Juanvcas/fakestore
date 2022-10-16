import { useState, useEffect } from 'react';
import endpoints from '@services/api/endpoints';

const useAllProducts = () => {
   const [list, setList] = useState([]);
   useEffect(() => {
      fetch(endpoints.products.getAllProducts)
         .then((res) => res.json())
         .then((json) => setList(json));
   }, []);
   return list;
};

const useLimitProducts = (offset, limit) => {
   const [list, setList] = useState([]);
   useEffect(() => {
      fetch(endpoints.products.getProducts(offset, limit))
         .then((res) => res.json())
         .then((json) => setList(json));
   }, []);
   return list;
};

export { useAllProducts, useLimitProducts };
