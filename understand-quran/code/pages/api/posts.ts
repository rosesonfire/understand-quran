import { NextApiHandler } from 'next';
import { gql } from '@apollo/client';

import { Post } from '@uqTypes/business/post';
import GraphQLClient from '@utils/graphql';

const METHODS = {
  GET: 'GET',
};

const handler: NextApiHandler<Post[]> = (async (req, res) => {
  if (req.method === METHODS.GET) {
    const { data: { posts } } = await GraphQLClient.get<{ posts: Post[] }>(gql`
      {
        posts {
          id
          title
        }
      }
    `);

    res.status(200).json(posts);
  }
});

export default handler;
