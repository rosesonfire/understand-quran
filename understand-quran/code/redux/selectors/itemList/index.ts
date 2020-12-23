import { createStructuredSelector } from 'reselect';

import { State } from '@redux/reducers';
import { ItemListState } from '@redux/reducers/itemList';

const itemListSelector = (state: State) => state.itemList.itemIds;

export default createStructuredSelector<State, ItemListState>({
  itemIds: itemListSelector,
});
