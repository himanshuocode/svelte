const fetchCategoriesQuery = `
  query 
  {
  categories{
  items{
    children{
    
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

// {
//   categories(
//       pageSize: 100
//       currentPage: 1
//     ) {
//       total_count
//       items {
//         uid
//         level
//         name
//         path
//         children_count
//         children {
//           uid
//           level
//           name
//           path
//           children_count
//           children {
//             uid
//             level
//             name
//             path
//             children_count
//             children {
//               uid
//               level
//               name
//               path
//             }
//           }
//         }
//       }
//       page_info {
//         current_page
//         page_size
//         total_pages
//       }
//     }
// }

export default fetchCategoriesQuery;
