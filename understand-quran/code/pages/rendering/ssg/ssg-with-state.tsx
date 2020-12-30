import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import PropTypes from 'prop-types';

import { Card, CardItem } from '@components';
import { ChangeHandler } from '@utils/react-utils';

type Props = {
  value1: string,
  value2: string,
};

const SSGWithState: NextPage<Props> = ({ value1, value2 }) => {
  const [name, setName] = useState('<name>');

  const onChange = ChangeHandler.getKeyPressHandler(setName);

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

SSGWithState.propTypes = {
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    value1: new Date().toISOString(),
    value2: 'value 2',
  },
});

export default SSGWithState;
