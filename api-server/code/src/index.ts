import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
 
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
  }

  type Query {
    posts: [Post]
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    posts: () => [
      {
        id: 1,
        title: 'This is a post hello 1',
      },
      {
        id: 2,
        title: 'This is another post hello hello 2',
      },
    ],
  },
};
 
const server = new ApolloServer({ resolvers, typeDefs });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
