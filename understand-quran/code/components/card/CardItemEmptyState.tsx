import React, { FC } from 'react';
import { Skeleton } from '@material-ui/lab';

const CardItemEmptyState: FC = () => (
  <>
    <Skeleton />
    <Skeleton />
  </>
);

export default CardItemEmptyState;
