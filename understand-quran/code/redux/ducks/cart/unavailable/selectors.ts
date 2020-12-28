import { createStructuredSelector } from 'reselect';

import { UnavailableCartState } from './reducers';

export type UnavailableCartSelectorsResult = {
  itemCounts: UnavailableCartState['itemCounts'],
};

export default createStructuredSelector<UnavailableCartState, UnavailableCartSelectorsResult>({
  itemCounts: ({ itemCounts }) => itemCounts,
});
