import { NextApiHandler } from 'next';
import { gql } from '@apollo/client';

import GraphQLAPI from '@utils/graphql';

const METHODS = {
  GET: 'GET',
};

export default (async (req, res) => {
  if (req.method === METHODS.GET) {
    const { data: { posts } } = await GraphQLAPI.get(gql`
    {
        posts {
          id
          title
        }
      }
    `);

    res.status(200).json(posts);
  }
}) as NextApiHandler;
