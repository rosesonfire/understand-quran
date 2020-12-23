import { Reducer } from '@uqTypes/application/redux';
import { ItemId } from '@uqTypes/business/item';
import ItemListActions, { ItemListActionType } from '@redux/actions/itemList';
import { ErrorType, ErrorFactory } from '@errors';

enum ItemListOperation {
  ADD,
  REMOVE,
}

export type ItemListState = {
  itemIds: ItemId[] | null,
};

const INITIAL_STATE: ItemListState = {
  itemIds: null,
};

const createItemNotInItemListError = (itemIds: ItemId[]) => ErrorFactory.createError(
  ErrorType.OBJECT_NOT_FOUND,
  'Item is not in item list',
  `Item list: ${JSON.stringify(itemIds)}`,
);

const createItemAlreadyInItemListError = (itemIds: ItemId[]) => ErrorFactory.createError(
  ErrorType.OBJECT_ALREADY_EXISTS,
  'Item is already in item list',
  `Item list: ${JSON.stringify(itemIds)}`,
);

const createUnknownItemListOperationError = (
  operation: ItemListOperation,
) => ErrorFactory.createError(
  ErrorType.SHOULD_NOT_REACH_CODE,
  'Unknown item list operation',
  `Item list operation: ${operation}`,
);

const getNewItemList = (
  itemId: ItemId,
  operation: ItemListOperation,
  itemList: ItemId[],
): ItemId[] => {
  let newItemList: ItemId[];
  const itemIndex = itemList.indexOf(itemId);

  if (itemIndex > -1) {
    switch (operation) {
      case ItemListOperation.ADD:

        throw createItemAlreadyInItemListError(itemList);

      case ItemListOperation.REMOVE:

        newItemList = itemList.slice(0, itemIndex).concat(itemList.slice(itemIndex + 1));

        break;

      default:

        throw createUnknownItemListOperationError(operation);
    }
  } else {
    switch (operation) {
      case ItemListOperation.ADD:

        newItemList = itemList.concat(itemId);

        break;

      case ItemListOperation.REMOVE:

        throw createItemNotInItemListError(itemList);

      default:

        throw createUnknownItemListOperationError(operation);
    }
  }

  return newItemList;
};

const safelyUpdateItemList = (
  state: ItemListState,
  itemId: ItemId,
  operation: ItemListOperation,
): ItemListState => {
  const { itemIds } = state;

  if (!itemIds) {
    throw ErrorFactory.createError(
      ErrorType.OBJECT_NOT_INITIALIZED,
      'Item list has not yet been initialized',
      `Item list: ${JSON.stringify(itemIds)}`,
    );
  }

  const newItemList = getNewItemList(itemId, operation, itemIds);

  const newState: ItemListState = {
    ...state,
    ...newItemList,
  };

  return newState;
};

const itemListReducer: Reducer<ItemListState, ItemListActions> = (
  state,
  action,
) => {
  if (!state) {
    return INITIAL_STATE;
  }

  const { payload: { itemId }, type } = action;

  let newState;

  switch (type) {
    case ItemListActionType.LIST_ITEM_ADDED:

      newState = safelyUpdateItemList(state, itemId, ItemListOperation.ADD);

      break;

    case ItemListActionType.LIST_ITEM_REMOVED:

      newState = safelyUpdateItemList(state, itemId, ItemListOperation.REMOVE);

      break;

    default:

      throw ErrorFactory.createError(
        ErrorType.SHOULD_NOT_REACH_CODE,
        'Unknown item list action type',
        `Item list action: ${type}`,
      );
  }

  return newState;
};

export default itemListReducer;
