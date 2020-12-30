import React from 'react';
import { NextPage } from 'next';

import { Card, CardItem } from '@components';
import { useSWRWithHTTP } from '@hooks';
import { Post } from '@uqTypes/business/post';

const ClientSideWithoutState: NextPage = () => {
  const { data: posts } = useSWRWithHTTP<Post[]>('/api/posts');
  const { error } = useSWRWithHTTP<Post[]>('/api/wrong-url');

  return (
    <Card>
      <CardItem
        name="Item 1"
        value="value 1"
      />

      <CardItem
        name="Item 2"
        value="value 2"
      />

      {error ? <CardItem hasError name="Error" /> : null}

      {posts
        ? posts.map(({ id, title }) => (
          <CardItem
            key={id}
            name="Post"
            value={title}
          />
        ))
        : <CardItem isEmpty name="Post" />}

      <CardItem isEmpty name="Loading" />
    </Card>
  );
};

export default ClientSideWithoutState;
