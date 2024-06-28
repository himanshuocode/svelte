import fetchCategoriesQuery from './catQueries.js';
import fetchProductsQuery from './productQueries.js';
import fetchProductsDetailQuery from './productDetails.js'

const GRAPHQL_ENDPOINT = 'https://qateam.diamondnexus.com/graphql';

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
 * @param {any} categoryId
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


// // Fetch product details
// export async function fetchProductBySku(sku) {
//   try {
//     const response = await fetch(GRAPHQL_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: fetchProductsDetailQuery,
//         variables: { sku },
//       }),
//     });

//     const result = await response.json();
//     console.log(result, '----------------result'); // Log the entire result

//     if (result.data && result.data.products && result.data.products.items) {
//       return result.data.products.items[0]; // Assuming the query returns a list with one item
//     } else {
//       console.error('Unexpected response structure:', result);
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching product by SKU:', error);
//     return null;
//   }
// }