import { gql } from '@apollo/client';

export const SUBCATEGORIES_FIELDS_FRAGMENT = gql`
  fragment SubcategoriesFields on Subcategories {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
`;

export const ORDER_FIELDS_FRAGMENT = gql`
  fragment OrderFields on Orders {
    _id
    firstname
    surname
    email
    phone
    date
    status
    basket {
      _id
      name
      type
      image
      price
      volume
      path
      quantity
    }
  }
`;

export const GET_GENERAL = gql`
query {
  getGeneral {
    _id
    name
  }
}
`;

export const GET_LIGHT = gql`
query{
  getLite {
    _id
    name
    image
  }
}
`;

export const GET_STRONG = gql`
query{
  getStrong {
    _id
    name
    image
  }
}
`;

export const GET_WHISKEY = gql`
  query {
    getWhiskey {
      ...SubcategoriesFields
    }
  }
    ${SUBCATEGORIES_FIELDS_FRAGMENT}
`;


export const GET_WINE = gql`
query{
  getWine {
    ...SubcategoriesFields
    }
}
  ${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_WHISKEY_BY_ID = gql`
query GetById($id: ID!) {
  getWhiskeyById(id: $id) {
    ...SubcategoriesFields
  }
} 
 ${SUBCATEGORIES_FIELDS_FRAGMENT}  

`;

export const GET_WINE_BY_ID = gql`
query GetById($id: ID!) {
  getWineById(id: $id) {
    ...SubcategoriesFields
  }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_BEER =  gql`
query {
  getBeer{
    ...SubcategoriesFields
  }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const  GET_BEER_BY_ID = gql`
query GetById($id: ID!) {
    getBeerById(id: $id) {
      ...SubcategoriesFields  
  }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_COCTAIL = gql`
query{
  getCoctail {
    ...SubcategoriesFields  
    }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_COCTAIL_BY_ID = gql`
query GetById($id: ID!) {
  getCoctailById(id: $id) {
    ...SubcategoriesFields  
  }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_CRAFT =  gql`
query{
  getCraft {
    ...SubcategoriesFields  
    }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_CRAFT_BY_ID =  gql`
query GetById($id: ID!) {
  getCraftById(id: $id) {
    ...SubcategoriesFields  
  }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_ENERGETIC = gql`
query{
  getEnergetic {
    ...SubcategoriesFields  
    }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_ENERGETIC_BY_ID = gql`
query GetById($id: ID!) {
  getEnergeticById(id: $id) {
    ...SubcategoriesFields  
  }
}
${SUBCATEGORIES_FIELDS_FRAGMENT}  
`;

export const GET_ALL_ORDERS = gql`
  query GetAllOrders {
    getAllOrders {
      ...OrderFields
    }
  }
  ${ORDER_FIELDS_FRAGMENT}
`;

export const GET_ORDERS_BY_EMAIL = gql`
  query GetOrdersByEmail($email: String!) {
    getOrdersByEmail(email: $email) {
      ...OrderFields
    }
  }
  ${ORDER_FIELDS_FRAGMENT}
`;

export const SEARCH_BY_NAME = gql`
  query SearchByName($name: String!) {
    searchByName(name: $name) {
      beer {
        _id
        name
        image
        type
        subtype
      }
      energetic {
        _id
        name
        image
        type
        subtype
      }
      coctail {
        _id
        name
        image
        type
        subtype
      }
      craft {
        _id
        name
        image
        type
        subtype
      }
      whiskey {
        _id
        name
        image
        type
        subtype
      }
      wine {
        _id
        name
        image
        type
        subtype
      }
    }
  }
`;
