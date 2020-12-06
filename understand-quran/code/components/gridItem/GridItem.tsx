import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { buildGridSizes } from '@utils/react-utils';

const gridSizes = buildGridSizes(12, 12, 6, 6, 3);

type Props = {
  children: ReactNode,
};

const GridItem: FC<Props> = ({ children }) => (
  <Grid
    item
    {...gridSizes}
  >
    {children}
  </Grid>
);

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridItem;
