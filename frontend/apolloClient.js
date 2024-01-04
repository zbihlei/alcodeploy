import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloLink } from 'apollo-link';
import { logger } from 'apollo-link-logger';

const httpLink = createHttpLink({
  uri: 'https://alcodeploy-api.vercel.app/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([logger, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
