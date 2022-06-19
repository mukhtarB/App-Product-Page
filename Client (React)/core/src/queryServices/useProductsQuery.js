import { useQuery, gql } from '@apollo/client';

const PRODUCT_LIST = gql`
    query ProductList {
        product {
            id
            name
            image
            price
        }
    }
`;


export const useProductsQuery = () => useQuery(PRODUCT_LIST);