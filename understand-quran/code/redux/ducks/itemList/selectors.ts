import { createStructuredSelector } from 'reselect';

import { ItemListState } from './reducers';

export type ItemsListSelectorsResult = {
  items: ItemListState['items'],
};

export default createStructuredSelector<ItemListState, ItemsListSelectorsResult>({
  items: ({ items }) => items,
});
