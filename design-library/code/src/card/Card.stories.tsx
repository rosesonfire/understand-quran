import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react/types-6-0';

import Card, { Props } from './Card';

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<Props> = (args) => <Card {...args} />;

export const Absolute = Template.bind({});

Absolute.args = {
  description: 'Card with absolute link',
  href: 'https://google.com',
  name: 'https://google.com',
};

// export const Relative = Template.bind({});

// Relative.args = {
//   description: 'Card with relative link',
//   href: '/link/sub-link',
//   name: '/link/sub-link',
// };

export default {
  component: Card,
  title: 'Design Library/Card',
} as Meta;
