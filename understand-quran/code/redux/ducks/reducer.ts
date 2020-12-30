import { CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { createReducer } from '@reduxjs/toolkit';

import { ClientServer } from '@uqTypes/application';
import { getClientOrServerSide } from '@utils/next';
import { ItemId } from '@uqTypes/business/item';

import { ActionFactory } from './actions';

import {
  CartState,
  reducer as CartReducer,
} from './cart';

import {
  ItemListState,
  reducer as ItemReducer,
} from './itemList';

export type ItemSearchState = {
  itemIds: ItemId[] | null,
  searchText: string | null,
};

const INITIAL_ITEM_SEARCH_STATE = {
  itemIds: null,
  searchText: null,
};

const itemSearchReducer = createReducer<ItemSearchState>(
  INITIAL_ITEM_SEARCH_STATE,
  builder => builder
    .addCase(HYDRATE, (state, action) => {
      // eslint-disable-next-line no-debugger
      debugger;
      // eslint-disable-next-line no-console
      console.log('state:', state, 'payload', action);
    })
    .addCase(
      ActionFactory.completeSearch,
      (_state, { payload: { itemIds, searchText } }) => ({ itemIds, searchText }),
    ),
);

type AppState = CombinedState<{
  cart: CartState,
  itemList: ItemListState,
  searchedItems: ItemSearchState,
}>;

const appReducer = combineReducers<AppState>({
  cart: CartReducer,
  itemList: ItemReducer,
  searchedItems: itemSearchReducer,
});

export type State = CombinedState<{
  [ClientServer.CLIENT]: AppState,
  [ClientServer.SERVER]: AppState,
}>;

const isInitializationCall = (state?: AppState): state is undefined => !state;

const isOnCorrectSide = (targetSide: ClientServer) => {
  const side = getClientOrServerSide();

  return (targetSide === ClientServer.SERVER && side === ClientServer.SERVER)
    || (targetSide === ClientServer.CLIENT && side === ClientServer.CLIENT);
};

const reducerWrapper = (
  wrappedReducer: typeof appReducer,
  targetSide: ClientServer,
): typeof appReducer => (state, action) => (
  (isInitializationCall(state) || isOnCorrectSide(targetSide))
    ? wrappedReducer(state, action)
    : { ...state }
);

export default combineReducers<State>({
  [ClientServer.CLIENT]: reducerWrapper(appReducer, ClientServer.CLIENT),
  [ClientServer.SERVER]: reducerWrapper(appReducer, ClientServer.SERVER),
});
