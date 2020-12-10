import React, { FC, useState } from 'react';

import { Card, CardItem } from '@components';
import { ChangeHandler } from '@utils/react-utils';

const StaticWithState: FC = () => {
  const [name, setName] = useState('<name>');

  const onChange = ChangeHandler.getKeyPressHandler(setName);

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

      <CardItem
        name="Stateful Name"
        onChange={onChange}
        value={name}
      />
    </Card>
  );
};

export default StaticWithState;
