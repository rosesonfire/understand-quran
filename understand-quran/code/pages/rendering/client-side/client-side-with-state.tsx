import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { NextPage } from 'next';

import { Card, CardItem } from '@components';
import { ChangeHandler } from '@utils/react-utils';
import { useSWRWithHTTP } from '@hooks';
import { Post } from '@uqTypes/business/post';

const ClientSideWithState: NextPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const { data: posts } = useSWRWithHTTP<Post[]>('/api/posts');
  const { error } = useSWRWithHTTP<Post[]>('/api/wrong-url');

  const handleClick = ChangeHandler.getClickHandler(() => setClickCount(clickCount + 1));

  return (
    <>
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

      <br />

      <Button
        color="secondary"
        onClick={handleClick}
        variant="contained"
      >
        Click count:
        &nbsp;
        {clickCount}
      </Button>
    </>
  );
};

export default ClientSideWithState;
