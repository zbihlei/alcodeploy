import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type General {
    _id: ID,
    name: String
  }
  
  type Categories {
    _id: ID,
    name: String,
    image: String
  }
  type Subcategories {
        _id: ID,
        name: String,
        type: String,
        image: String,
        description: String,
        price: Float,
        volume: String,
        subtype: String
    }
  
  type BasketItem {
    _id: ID
    name: String
    type: String
    image: String
    price: Float
    volume: String
    path: String
    quantity: Int
  }
  
  type Orders {
    _id: ID,
    firstname: String,
    surname: String,
    email: String,
    phone: String,
    date: String,
    status: String,
    basket: [BasketItem]
  }

  type UpdateOrderStatus {
  _id: ID!
  status: String!
  }

  type SearchResult {
    beer: [Subcategories],
    energetic: [Subcategories],
    coctail: [Subcategories],
    craft: [Subcategories],
    whiskey: [Subcategories],
    wine: [Subcategories],
}

  type Query {
    getGeneral: [General],
    getLite: [Categories],
    getStrong: [Categories],
    getBeer: [Subcategories],
    getEnergetic: [Subcategories],
    getCoctail: [Subcategories],
    getCraft: [Subcategories],
    getWhiskey: [Subcategories],
    getWine: [Subcategories],
    getBeerById(id: ID): Subcategories,
    getEnergeticById(id: ID): Subcategories,
    getCraftById(id: ID): Subcategories,
    getCoctailById(id: ID): Subcategories,
    getWhiskeyById(id: ID): Subcategories,
    getWineById(id: ID): Subcategories,
    getAllOrders: [Orders],
    getOrdersByEmail(email: String) : [Orders],
    searchByName(name: String): SearchResult
  }
  
  type Mutation {
    createOrder(
      input: OrderInput!
    ): Orders
  }
  type Mutation {
  updateOrderStatus(orderId: ID!, newStatus: String!): UpdateOrderStatus
}

input OrderInput {
    firstname: String!
    surname: String!
    email: String!
    phone: String!
    date: String!
    status: String!
    basket: [BasketItemInput]!
  }

  input BasketItemInput {
    _id: ID!
    name: String!
    type: String!
    image: String!
    price: Float!
    volume: String
    path: String!
    quantity: Int!
  }
`;

export default typeDefs;
