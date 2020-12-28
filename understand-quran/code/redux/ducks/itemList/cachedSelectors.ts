import { createStructuredCachedSelector } from 're-reselect';

import { ItemId } from '@uqTypes/business/item';

import { ItemListState } from './reducers';

// eslint-disable-next-line import/prefer-default-export
export const itemExistsInListSelector = createStructuredCachedSelector({
  itemExists: (state: ItemListState, itemId: ItemId) => (
    state.items ? state.items.map(({ id }) => id).indexOf(itemId) > -1 : null
  ),
})(
  (_state, itemId) => itemId,
);
