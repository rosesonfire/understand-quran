import 'reflect-metadata';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { buildSchema, ObjectType, Field, ID, Resolver, Query } from 'type-graphql';

@ObjectType()
class Item {
  @Field()
  category!: string;

  @Field(type => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  price!: string;
}

@ObjectType()
class Post {
  @Field(type => ID)
  id!: string;

  @Field()
  title!: string;
}

@Resolver(Item)
class ItemResolver {
  @Query(() => [Item])
  items() {
    return [
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
    ];
  }
}

@Resolver(Post)
class PostResolver {
  @Query(() => [Post])
  posts() {
    return [
      {
        id: 1,
        title: 'This is a post hello 1',
      },
      {
        id: 2,
        title: 'This is another post hello hello 2',
      },
    ];
  }
}

const schema = await buildSchema({
  resolvers: [
    ItemResolver,
    PostResolver,
  ],
})

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
