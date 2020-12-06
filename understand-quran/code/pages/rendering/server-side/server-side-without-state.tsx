import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';

import { Card, CardItem } from '@components';

type Props = {
  headers: string[],
  serverTime: string,
};

const ServerSideWithoutState: FC<Props> = ({ headers, serverTime }) => (
  <Card>
    <CardItem
      name="Headers"
      value={headers}
    />

    <CardItem
      name="Server time"
      value={serverTime}
    />
  </Card>
);

ServerSideWithoutState.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  serverTime: PropTypes.string.isRequired,
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => ({
  props: {
    headers: [context.req.headers['user-agent'] ?? 'hello'],
    serverTime: (new Date()).toISOString(),
  },
});

export default ServerSideWithoutState;
