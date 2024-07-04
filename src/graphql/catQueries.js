const fetchCategoriesQuery = `
  query 
  {
  categories{
  items{
    children{
      uid
      product_count
      image
   path
  name
   children{
   uid
  path
  name
  children{
  uid
    path
  name
  }
  }
  }
  }
}
}
`;



export default fetchCategoriesQuery;
