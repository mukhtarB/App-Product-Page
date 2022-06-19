import { useQuery, gql } from '@apollo/client';

const PRODUCT_LIST = gql`
    query ProductList {
        product {
            id
            name
            image
            price
            description
        }
    }
`;


export const useProductsQuery = () => useQuery(PRODUCT_LIST);