import React, { FC } from 'react';

import { Card, CardItem } from '@components';

const StaticWithoutState: FC = () => (
  <Card>
    <CardItem
      name="Item 1"
      value="value 1"
    />

    <CardItem
      name="Item 2"
      value="value 2"
    />
  </Card>
);

export default StaticWithoutState;
