import { createStructuredCachedSelector } from 're-reselect';

import { UnavailableCartState } from '@redux/reducers/cart/unavailable';
import { ItemId } from '@uqTypes/business/item';

// eslint-disable-next-line import/prefer-default-export
export const singleUnavailableCartItemCountSelector = createStructuredCachedSelector({
  singleItemCount: (
    state: UnavailableCartState,
    itemId: ItemId,
  ) => state.itemCounts?.[itemId] ?? null,
})(
  (_state, itemId) => itemId,
);
