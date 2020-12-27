import { createReducer } from '@reduxjs/toolkit';

import { Item, ItemId } from '@uqTypes/business/item';
import { ItemListActionFactory } from '@redux/actions/itemList';
import { ErrorType, ErrorFactory } from '@errors';

export type ItemListState = {
  items: Item[] | null,
};

const INITIAL_STATE: ItemListState = {
  items: null,
};

const createItemListNotInitializedError = () => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_INITIALIZED,
  'Item list has not yet been initialized',
);

const createItemNotInItemListError = (items: Item[]) => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_FOUND,
  'Item is not in item list',
  `Item list: ${JSON.stringify(items)}`,
);

const createItemAlreadyInItemListError = (items: Item[]) => ErrorFactory.createError(
  ErrorType.OBJECT_ALREADY_EXISTS,
  'Item is already in item list',
  `Item list: ${JSON.stringify(items)}`,
);

const safelyUpdateState = (
  getUpdatedItemList: (items: Item[], itemIndex: number) => Item[],
) => (state: ItemListState, itemId: ItemId) => {
  const { items } = state;

  if (!items) {
    throw createItemListNotInitializedError();
  }

  const itemIndex = items.map(({ id }) => id).indexOf(itemId);

  return {
    ...state,
    items: getUpdatedItemList(items, itemIndex),
  };
};

const safelyAddToItemList = (
  state: ItemListState,
  item: Item,
): ItemListState => safelyUpdateState((items, itemIndex) => {
  if (itemIndex > -1) {
    throw createItemAlreadyInItemListError(items);
  }

  return items.concat(item);
})(state, item.id);

const safelyRemoveFromItemList = (
  state: ItemListState,
  itemId: ItemId,
): ItemListState => safelyUpdateState((items, itemIndex) => {
  if (itemIndex === -1) {
    throw createItemNotInItemListError(items);
  }

  return items.slice(0, itemIndex).concat(items.slice(itemIndex + 1));
})(state, itemId);

const initializeItemList = (items: Item[]): ItemListState => ({ items });

const itemListReducer = createReducer<ItemListState>(
  INITIAL_STATE,
  builder => builder
    .addCase(
      ItemListActionFactory.initializeItemList.fulfilled,
      (_state, { payload: { items } }) => initializeItemList(items),
    )
    .addCase(
      ItemListActionFactory.addToItemList,
      (state, { payload: { item } }) => safelyAddToItemList(state, item),
    )
    .addCase(
      ItemListActionFactory.removeFromItemList,
      (state, { payload: { itemId } }) => safelyRemoveFromItemList(state, itemId),
    ),
);

export default itemListReducer;
