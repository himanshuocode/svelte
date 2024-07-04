const fetchProductsQuery = `
 query productsByCategory($categoryUID: String!) {
  products(filter: {category_uid: {eq: $categoryUID}}) {
    total_count
  aggregations{
        count
        label
        attribute_code
        options{
            count
            label
            value
        }
    }
    items {
      id
      uid
      sku
      name
      url_key
      stock_status
      image {
        url
        label
        position
      }
      small_image {
        url
        label
        position
      }
      thumbnail {
        url
        label
        position
      }
      media_gallery {
        url
        label
      }
      short_description {
        html
      }
      description {
        html
      }
      base_price
      special_price
      special_price
      special_to_date
    }
  }
}
`;

export default fetchProductsQuery;