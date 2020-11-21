import React, { FC } from 'react';
import {
  Card as MaterialCard,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

type Props = {
  description: string,
  link: string,
  name: string,
};

const Card: FC<Props> = ({ description, link, name }) => (
  <MaterialCard>
    <CardContent>
      <Link href={link}>
        <Typography variant="h3">
          {name}
        </Typography>

        <Typography paragraph>
          {description}
        </Typography>
      </Link>
    </CardContent>
  </MaterialCard>
);

Card.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
