import React, { FC } from 'react';

import { Card, CardItem } from '@components';
import { API } from '@utils/react-utils';

type Posts = {
  id: string,
  title: string,
};

const ClientSideWithoutState: FC = () => {
  const { data: posts } = API.get<Posts[]>('/api/posts');
  const { error } = API.get<Posts[]>('/api/wrong-url');

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
