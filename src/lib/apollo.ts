/* eslint-disable prettier/prettier */
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

const API_ENDPOINT = `${process.env.VERCEL_ENV === 'production'
  ? process.env.GRAPHQL_ENDPOINT
  : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
  }`;

let cachedClient: any = null;

export const getClient = (): ApolloClient<NormalizedCacheObject> => {
  if (cachedClient) return cachedClient;

  const client = new ApolloClient({
    uri: API_ENDPOINT,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      }
    }
  });

  cachedClient = client;

  return client;
};
