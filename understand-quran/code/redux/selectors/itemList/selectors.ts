import { createStructuredSelector } from 'reselect';

import { ItemListState } from '@redux/reducers/itemList';

export type ItemsListResult = {
  items: ItemListState['items'],
};

export default createStructuredSelector<ItemListState, ItemsListResult>({
  items: ({ items }) => items,
});
