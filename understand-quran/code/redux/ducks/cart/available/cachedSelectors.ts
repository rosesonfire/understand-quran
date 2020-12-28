import { createStructuredCachedSelector } from 're-reselect';

import { ItemId } from '@uqTypes/business/item';

import { AvailableCartState } from './reducers';

// eslint-disable-next-line import/prefer-default-export
export const singleAvailableCartItemCountSelector = createStructuredCachedSelector({
  singleItemCount: (
    state: AvailableCartState,
    itemId: ItemId,
  ) => state.itemCounts?.[itemId] ?? null,
})(
  (_state, itemId) => itemId,
);
