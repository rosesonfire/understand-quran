import { CombinedState, combineReducers } from 'redux';

import cart, { CartState } from './cart';
import itemList, { ItemListState } from './itemList';

export type State = CombinedState<{
  cart: CartState,
  itemList: ItemListState,
}>;

export default combineReducers<State>({
  cart,
  itemList,
});
