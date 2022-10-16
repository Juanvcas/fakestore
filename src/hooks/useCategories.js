import endpoints from '@services/api/endpoints';
import { useEffect, useState } from 'react';

const getAllCategories = () => {
   const [list, setList] = useState([]);
   useEffect(() => {
      fetch(endpoints.categories.getAllCategories)
         .then((res) => res.json())
         .then((json) => setList(json));
   }, []);
   return list;
};

export { getAllCategories };
