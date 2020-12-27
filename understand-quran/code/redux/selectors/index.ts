import { createStructuredSelector } from 'reselect';

import { State } from '@redux/reducers';

import cartSelectors, { CartSelectorResult } from './cart';
import itemListSelectors, { ItemsListResult } from './itemList';

type SelectorResult = {
  cart: CartSelectorResult,
  itemList: ItemsListResult,
};

export default createStructuredSelector<State, SelectorResult>({
  cart: ({ cart }) => cartSelectors(cart),
  itemList: ({ itemList }) => itemListSelectors(itemList),
});
