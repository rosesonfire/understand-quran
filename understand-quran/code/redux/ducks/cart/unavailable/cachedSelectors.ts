import { createStructuredCachedSelector } from 're-reselect';

import { ItemId } from '@uqTypes/business/item';

import { UnavailableCartState } from './reducer';

// eslint-disable-next-line import/prefer-default-export
export const singleUnavailableCartItemCountSelector = createStructuredCachedSelector({
  singleItemCount: (
    state: UnavailableCartState | undefined,
    itemId: ItemId,
  ) => state?.itemCounts?.[itemId] ?? null,
})(
  (_state, itemId) => itemId,
);
