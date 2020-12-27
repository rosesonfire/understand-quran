import { createStructuredSelector } from 'reselect';

import { UnavailableCartState } from '@redux/reducers/cart/unavailable';

export type UnavailableCartItemsResult = {
  itemCounts: UnavailableCartState['itemCounts'],
};

export default createStructuredSelector<UnavailableCartState, UnavailableCartItemsResult>({
  itemCounts: ({ itemCounts }) => itemCounts,
});
