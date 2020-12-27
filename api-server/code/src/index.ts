import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
 type Item {
    category: String!
    id: ID!
    name: String!
    price: String!
  }

  type Post {
    id: ID!
    title: String!
  }

  type Query {
    items: [Item]
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    items: () => [
      {
        category: 'food',
        id: '4984',
        name: 'Egg',
        price: '$1 per dozen',
      },
      {
        category: 'toy',
        id: '9689',
        name: 'Football',
        price: '$10',
      },
      {
        category: 'food',
        id: '4586',
        name: 'Cake',
        price: '$2 per pound',
      },
    ],

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
