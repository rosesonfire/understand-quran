import { createStructuredSelector } from 'reselect';

import { ItemListState } from './reducer';

export type ItemsListSelectorsResult = {
  items: ItemListState['items'],
};

export default createStructuredSelector<ItemListState | undefined, ItemsListSelectorsResult>({
  items: state => state?.items ?? null,
});
