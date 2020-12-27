import { createStructuredCachedSelector } from 're-reselect';

import { AvailableCartState } from '@redux/reducers/cart/available';
import { ItemId } from '@uqTypes/business/item';

// eslint-disable-next-line import/prefer-default-export
export const singleAvailableCartItemCountSelector = createStructuredCachedSelector({
  singleItemCount: (
    state: AvailableCartState,
    itemId: ItemId,
  ) => state.itemCounts?.[itemId] ?? null,
})(
  (_state, itemId) => itemId,
);
