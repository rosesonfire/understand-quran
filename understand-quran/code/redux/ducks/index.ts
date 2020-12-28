import { CombinedState, combineReducers } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  cartReducers,
  cartSelectors,
  CartState,
  CartSelectorsResult,
} from './cart';

import {
  itemListReducers,
  ItemListState,
  ItemsListSelectorsResult,
  itemListSelectors,
} from './itemList';

export type State = CombinedState<{
  cart: CartState,
  itemList: ItemListState,
}>;

export const reducers = combineReducers<State>({
  cart: cartReducers,
  itemList: itemListReducers,
});

export type SelectorsResult = {
  cartItems: CartSelectorsResult,
  itemList: ItemsListSelectorsResult,
};

export const selectors = createStructuredSelector<State, SelectorsResult>({
  cartItems: ({ cart }) => cartSelectors(cart),
  itemList: ({ itemList }) => itemListSelectors(itemList),
});
