import { createStructuredSelector } from 'reselect';

import { AvailableCartState } from './reducers';

export type AvailableCartSelectorsResult = {
  itemCounts: AvailableCartState['itemCounts'],
};

export default createStructuredSelector<AvailableCartState, AvailableCartSelectorsResult>({
  itemCounts: ({ itemCounts }) => itemCounts,
});
