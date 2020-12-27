/* eslint-disable max-classes-per-file */

import {
  ApolloClient,
  gql,
  InMemoryCache,
} from '@apollo/client';

import { apiServer } from '@config/endpoints';

// GraphQL API

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
  }

  type Query {
    posts: [Post]
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  typeDefs,
  uri: `${apiServer.url}${apiServer.endpoints.graphql}`,
});

export default class GraphQLClient {
  static get = <T>(query: any) => client.query<T>({ query });
}
