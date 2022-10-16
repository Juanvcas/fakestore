const API = process.env.NEXT_PUBLIC_API;
const version = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
   products: {
      getAllProducts: `${API}/api/${version}/products`,
      getProducts: (offset, limit) => `${API}/api/${version}/products?offset=${offset}&limit=${limit}`,
   },
   categories: {
      getAllCategories: `${API}/api/${version}/categories`,
      getCastegory: (id) => `${API}/api/${version}/categories/${id}`,
   },
};

export default endpoints;
