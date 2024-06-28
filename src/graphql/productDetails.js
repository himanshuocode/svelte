const fetchProductsDetailQuery = `
  query getProductBySku($sku: String!) {
  products(filter: { sku: { eq: $sku } }) {
    items {
      name
      sku
      url_key
      stock_status
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      description {
        html
      }
      updated_at
      ... on ConfigurableProduct {
        variants {
          product {
            name
            sku
            price_range {
              minimum_price {
                regular_price {
                  value
                  currency
                }
              }
            }
            stock_status
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}
`;

export default fetchProductsDetailQuery;