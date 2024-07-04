import fetchCategoriesQuery from './catQueries.js';
import fetchProductsQuery from './productQueries.js';
// import fetchProductsDetailQuery from './productDetails.js'

const GRAPHQL_ENDPOINT = 'https://sanjay.diamondnexus.com/graphql';

// Fetch categories

export async function fetchCategories() {
    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: fetchCategoriesQuery }),
      });
  
      const { data } = await response.json();
      return data.categories.items;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
}

/**
 * @param {string | null} categoryId
 */
export async function fetchProducts(categoryId) {
  const query = fetchProductsQuery;

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         query, 
         variables: { categoryId } }),
    });
    const data = await response.json();
    console.log(data,'--------------data');// Add console log here

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}


