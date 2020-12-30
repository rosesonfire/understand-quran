import { createStructuredSelector } from 'reselect';

import { UnavailableCartState } from './reducer';

export type UnavailableCartSelectorsResult = {
  itemCounts: UnavailableCartState['itemCounts'],
};

export default createStructuredSelector<
UnavailableCartState | undefined,
UnavailableCartSelectorsResult
>({
  itemCounts: state => state?.itemCounts ?? null,
});
