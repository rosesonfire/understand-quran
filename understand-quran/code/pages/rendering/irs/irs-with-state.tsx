import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import PropTypes from 'prop-types';

import { Card, CardItem } from '@components';
import { getKeyPressHandler } from '@utils/react-utils';

type Props = {
  value1: string,
  value2: string,
};

const IRSWithState: FC<Props> = ({ value1, value2 }) => {
  const [name, setName] = useState('<name>');

  const onChange = getKeyPressHandler(setName);

  return (
    <Card>
      <CardItem
        name="Item 1"
        value={value1}
      />

      <CardItem
        name="Item 2"
        value={value2}
      />

      <CardItem
        name="Stateful Name"
        onChange={onChange}
        value={name}
      />
    </Card>
  );
};

IRSWithState.propTypes = {
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    value1: new Date().toISOString(),
    value2: 'value 2',
  },
  revalidate: 10, // seconds
});

export default IRSWithState;
