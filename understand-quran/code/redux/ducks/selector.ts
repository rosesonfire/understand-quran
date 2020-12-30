import { createStructuredSelector } from 'reselect';

import { getClientOrServerSide } from '@utils/next';

import { ItemSearchState, State } from './reducer';

import {
  CartSelectorsResult,
  selector as cartSelector,
} from './cart';

import {
  ItemsListSelectorsResult,
  selector as itemSelector,
} from './itemList';

type SearchedItemsSelectorResult = ItemSearchState;

const searchedItemsSelector = createStructuredSelector<
ItemSearchState | undefined,
SearchedItemsSelectorResult
>({
  itemIds: state => state?.itemIds ?? null,
  searchText: state => state?.searchText ?? null,
});

export type SelectorsResult = {
  cartItems: CartSelectorsResult,
  itemList: ItemsListSelectorsResult,
  searchedItems: SearchedItemsSelectorResult,
};

export default createStructuredSelector<State | undefined, SelectorsResult>({
  cartItems: state => cartSelector(state?.[getClientOrServerSide()].cart),
  itemList: state => itemSelector(state?.[getClientOrServerSide()].itemList),
  searchedItems: state => searchedItemsSelector(state?.[getClientOrServerSide()].searchedItems),
});
