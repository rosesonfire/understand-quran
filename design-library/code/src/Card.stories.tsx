import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Card, { Props } from './Card';

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'Some description',
  link: 'https://google.com',
  name: 'Some name',
};

export default {
  component: Card,
  title: 'Design Library/Card',
} as Meta;
