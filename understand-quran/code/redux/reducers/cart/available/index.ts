import { createReducer } from '@reduxjs/toolkit';

import { ItemId } from '@uqTypes/business/item';
import { CartActionFactory } from '@redux/actions/cart';
import { ItemListActionFactory } from '@redux/actions/itemList';
import { ErrorType, ErrorFactory } from '@errors';

type AvailableCartItemCounts = { [itemId: string]: number };

export type AvailableCartState = {
  itemCounts: AvailableCartItemCounts | null,
};

const INITIAL_STATE: AvailableCartState = {
  itemCounts: null,
};

const createItemNotInAvailableCartError = (
  itemCounts: AvailableCartItemCounts,
) => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_FOUND,
  'Item is not in available cart',
  `itemCounts: ${JSON.stringify(itemCounts)}`,
);

const createCartNotInitializedError = () => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_INITIALIZED,
  'Available cart items have not yet been initialized',
);

const safelyUpdateState = (
  getUpdatedItemCounts: (itemCounts: AvailableCartItemCounts) => AvailableCartItemCounts,
) => (state: AvailableCartState) => {
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
  state: AvailableCartState,
  itemId: ItemId,
): AvailableCartState => safelyUpdateState((itemCounts: AvailableCartItemCounts) => {
  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;
  const newItemCount = itemId in itemCounts ? currentItemCount + 1 : 1;

  return {
    ...restItemCounts,
    [itemId]: newItemCount,
  };
})(state);

const safelyRemoveFromCart = (
  state: AvailableCartState,
  itemId: ItemId,
): AvailableCartState => safelyUpdateState((
  itemCounts: AvailableCartItemCounts,
) => {
  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;

  let newItemCount: number;

  if (itemId in itemCounts) {
    if (currentItemCount < 1) {
      throw createItemNotInAvailableCartError(itemCounts);
    }

    newItemCount = currentItemCount - 1;
  } else {
    throw createItemNotInAvailableCartError(itemCounts);
  }

  return newItemCount === 0 ? restItemCounts : {
    ...restItemCounts,
    [itemId]: newItemCount,
  };
})(state);

const safelyRemoveAllFromCart = (
  state: AvailableCartState,
  itemId: ItemId,
): AvailableCartState => safelyUpdateState((
  itemCounts: AvailableCartItemCounts,
) => {
  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;

  if (!(itemId in itemCounts) || currentItemCount < 1) {
    throw createItemNotInAvailableCartError(itemCounts);
  }

  return restItemCounts;
})(state);

const availableCartReducer = createReducer<AvailableCartState>(
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

export default availableCartReducer;
