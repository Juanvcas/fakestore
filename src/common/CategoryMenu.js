import { getAllCategories } from '@hooks/useCategories';
const CategoryMenu = ({ classes }) => {
   const categories = getAllCategories();
   return (
      <menu className={classes}>
         <ul>
            <li>All</li>
            {categories.map((cat, index) => {
               return <li key={index}>{cat.name}</li>;
            })}
         </ul>
      </menu>
   );
};

export default CategoryMenu;
