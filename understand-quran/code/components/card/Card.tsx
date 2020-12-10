import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
  Card as MaterialCard,
  CardActions,
  CardContent,
  Link as MaterialLink,
} from '@material-ui/core';
import Link from 'next/link';

type Props = {
  children: ReactNode,
};

/**
 * Custom card
 */
const Card: FC<Props> = ({ children }) => (
  <MaterialCard>
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <Link href="/">
        <MaterialLink>
          Back to home
        </MaterialLink>
      </Link>
    </CardActions>
  </MaterialCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
