import { createReducer } from '@reduxjs/toolkit';

import { ItemId } from '@uqTypes/business/item';
import { CartActionFactory } from '@redux/actions/cart';
import { ItemListActionFactory } from '@redux/actions/itemList';
import { ErrorType, ErrorFactory } from '@errors';

type UnavailableCartItemCounts = { [itemId: string]: number };

export type UnavailableCartState = {
  itemCounts: UnavailableCartItemCounts | null,
};

const INITIAL_STATE: UnavailableCartState = {
  itemCounts: null,
};

const createItemNotInUnavailableCartError = (
  itemCounts: UnavailableCartItemCounts,
) => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_FOUND,
  'Item is not in unavailable cart',
  `itemCounts: ${JSON.stringify(itemCounts)}`,
);

const createCartNotInitializedError = () => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_INITIALIZED,
  'Unavailable cart items have not yet been initialized',
);

const safelyUpdateState = (
  getUpdatedItemCounts: (itemCounts: UnavailableCartItemCounts) => UnavailableCartItemCounts,
) => (state: UnavailableCartState) => {
  const { itemCounts } = state;

  if (!itemCounts) {
    throw createCartNotInitializedError();
  }

  return {
    ...state,
    itemCounts: getUpdatedItemCounts(itemCounts),
  };
};

const safelyAddToCart = (
  state: UnavailableCartState,
  itemId: ItemId,
): UnavailableCartState => safelyUpdateState((itemCounts: UnavailableCartItemCounts) => {
  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;
  const newItemCount = itemId in itemCounts ? currentItemCount + 1 : 1;

  return {
    ...restItemCounts,
    [itemId]: newItemCount,
  };
})(state);

const safelyRemoveFromCart = (
  state: UnavailableCartState,
  itemId: ItemId,
): UnavailableCartState => safelyUpdateState((
  itemCounts: UnavailableCartItemCounts,
) => {
  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;

  let newItemCount: number;

  if (itemId in itemCounts) {
    if (currentItemCount < 1) {
      throw createItemNotInUnavailableCartError(itemCounts);
    }

    newItemCount = currentItemCount - 1;
  } else {
    throw createItemNotInUnavailableCartError(itemCounts);
  }

  return newItemCount === 0 ? restItemCounts : {
    ...restItemCounts,
    [itemId]: newItemCount,
  };
})(state);

const safelyRemoveAllFromCart = (
  state: UnavailableCartState,
  itemId: ItemId,
): UnavailableCartState => safelyUpdateState((
  itemCounts: UnavailableCartItemCounts,
) => {
  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;

  if (!(itemId in itemCounts) || currentItemCount < 1) {
    throw createItemNotInUnavailableCartError(itemCounts);
  }

  return restItemCounts;
})(state);

const unavailableCartReducer = createReducer<UnavailableCartState>(
  INITIAL_STATE,
  builder => builder
    .addCase(
      CartActionFactory.addToCart,
      (state, { payload: { itemId } }) => safelyAddToCart(state, itemId),
    )
    .addCase(
      CartActionFactory.removeFromCart,
      (state, { payload: { itemId } }) => safelyRemoveFromCart(state, itemId),
    )
    .addCase(
      ItemListActionFactory.removeFromItemList,
      (state, { payload: { itemId } }) => safelyRemoveAllFromCart(state, itemId),
    ),
);

export default unavailableCartReducer;
