import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'alcodeploy-api.vercel.app' , 
  cache: new InMemoryCache(),
});

export default client;
