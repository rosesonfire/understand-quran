import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Card as MaterialCard,
  CardContent,
  Typography,
} from '@material-ui/core';

import CardLink from './CardLink';

export type Props = {
  LinkComponent?: FC<{ href: string, target: string }>,
  description: string,
  href: string,
  name: string,
};

const Card: FC<Props> = ({
  description,
  href,
  name,
}) => (
  <MaterialCard>
    <CardContent>
      <CardLink
        href={href}
      >
        <Typography variant="h3">
          {name}
        </Typography>

        <Typography paragraph>
          {description}
        </Typography>
      </CardLink>
    </CardContent>
  </MaterialCard>
);

Card.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
