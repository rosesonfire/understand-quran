import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import PropTypes from 'prop-types';

import { Card, CardItem } from '@components';

type Props = {
  value1: string,
  value2: string,
};

const SSGWithoutState: FC<Props> = ({ value1, value2 }) => (
  <Card>
    <CardItem
      name="Item 1"
      value={value1}
    />

    <CardItem
      name="Item 2"
      value={value2}
    />
  </Card>
);

SSGWithoutState.propTypes = {
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    value1: new Date().toISOString(),
    value2: 'value 2',
  },
});

export default SSGWithoutState;
