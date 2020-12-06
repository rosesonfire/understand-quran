import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import {
  Card as MaterialCard,
  CardActions,
  CardContent,
  Link as MaterialLink,
} from '@material-ui/core';
import Link from 'next/link';

type Props = {
  children: ReactElement | ReactElement[],
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element.isRequired),
  ]).isRequired,
};

export default Card;
