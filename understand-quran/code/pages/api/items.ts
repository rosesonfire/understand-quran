import { NextApiHandler } from 'next';
import { gql } from '@apollo/client';

import GraphQLClient from '@utils/graphql';
import { Item } from '@uqTypes/business/item';

const METHODS = {
  GET: 'GET',
};

const handler: NextApiHandler<Item[]> = (async (req, res) => {
  if (req.method === METHODS.GET) {
    const { data: { items } } = await GraphQLClient.get<{ items: Item[] }>(gql`
      {
        items {
          id
          name
          category
          price
        }
      }
    `);

    res.status(200).json(items);
  }
});

export default handler;
