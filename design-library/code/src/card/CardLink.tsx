import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Link } from '@material-ui/core';

import { Children } from '@utils/react-utils';

export type Props = {
  children: Children,
  href: string,
};

const CardLink: FC<Props> = ({ children, href }) => (
  <Link
    href={href}
    target={href.startsWith('/') ? '_self' : '_blank'}
  >
    {children}
  </Link>
);

CardLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

export default CardLink;
