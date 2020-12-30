import { createStructuredSelector } from 'reselect';

import { AvailableCartState } from './reducer';

export type AvailableCartSelectorsResult = {
  itemCounts: AvailableCartState['itemCounts'],
};

export default createStructuredSelector<
AvailableCartState | undefined,
AvailableCartSelectorsResult
>({
  itemCounts: state => state?.itemCounts ?? null,
});
