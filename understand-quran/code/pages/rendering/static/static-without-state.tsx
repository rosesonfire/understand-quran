import React from 'react';
import { NextPage } from 'next';

import { Card, CardItem } from '@components';

const StaticWithoutState: NextPage = () => (
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
