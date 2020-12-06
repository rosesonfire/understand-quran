import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';

import { Card, CardItem } from '@components';
import { getKeyPressHandler } from '@utils/react-utils';

type Props = {
  headers: string[],
  serverTime: string,
};

const ServerSideWithState: FC<Props> = ({ headers, serverTime }) => {
  const [name, setName] = useState('<name>');

  const onChange = getKeyPressHandler(setName);

  return (
    <Card>
      <CardItem
        name="Headers"
        value={headers}
      />

      <CardItem
        name="Server time"
        value={serverTime}
      />

      <CardItem
        name="Stateful Name"
        onChange={onChange}
        value={name}
      />
    </Card>
  );
};

ServerSideWithState.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  serverTime: PropTypes.string.isRequired,
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => ({
  props: {
    headers: [context.req.headers['user-agent'] ?? 'hello'],
    serverTime: (new Date()).toISOString(),
  },
});

export default ServerSideWithState;
