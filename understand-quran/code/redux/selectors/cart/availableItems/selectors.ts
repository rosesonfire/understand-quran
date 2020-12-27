import { createStructuredSelector } from 'reselect';

import { AvailableCartState } from '@redux/reducers/cart/available';

export type AvailableCartItemsResult = {
  itemCounts: AvailableCartState['itemCounts'],
};

export default createStructuredSelector<AvailableCartState, AvailableCartItemsResult>({
  itemCounts: ({ itemCounts }) => itemCounts,
});
