import { Reducer } from '@uqTypes/application/redux';
import { ItemId } from '@uqTypes/business/item';
import { CartActions, CartActionType } from '@redux/actions/cart';
import { ItemListActions, ItemListActionType } from '@redux/actions/itemList';
import { ErrorType, ErrorFactory } from '@errors';

enum UnavailableCartOperation {
  ADD,
  REMOVE,
  FORCE_REMOVE_ALL,
}

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

const createUnknownUnavailableCartOperationError = (
  operation: UnavailableCartOperation,
) => ErrorFactory.createError(
  ErrorType.SHOULD_NOT_REACH_CODE,
  'Unknown unavailable cart operation',
  `Unavailable cart operation: ${operation}`,
);

const getNewItemCount = (
  itemId: ItemId,
  operation: UnavailableCartOperation,
  itemCounts: UnavailableCartItemCounts,
): number => {
  let newItemCount: number;

  if (itemId in itemCounts) {
    const currentItemCount = itemCounts[itemId];

    switch (operation) {
      case UnavailableCartOperation.ADD:

        newItemCount = currentItemCount + 1;

        break;

      case UnavailableCartOperation.REMOVE:

        if (currentItemCount < 1) {
          throw createItemNotInUnavailableCartError(itemCounts);
        }

        newItemCount = currentItemCount - 1;

        break;

      case UnavailableCartOperation.FORCE_REMOVE_ALL:

        newItemCount = 0;

        break;

      default:

        throw createUnknownUnavailableCartOperationError(operation);
    }
  } else {
    switch (operation) {
      case UnavailableCartOperation.ADD:

        newItemCount = 1;

        break;

      case UnavailableCartOperation.REMOVE:

        throw createItemNotInUnavailableCartError(itemCounts);

      case UnavailableCartOperation.FORCE_REMOVE_ALL:

        newItemCount = 0;

        break;

      default:

        throw createUnknownUnavailableCartOperationError(operation);
    }
  }

  return newItemCount;
};

const safelyUpdateCart = (
  state: UnavailableCartState,
  itemId: ItemId,
  operation: UnavailableCartOperation,
): UnavailableCartState => {
  const { itemCounts } = state;

  if (!itemCounts) {
    throw ErrorFactory.createError(
      ErrorType.OBJECT_NOT_INITIALIZED,
      'Unavailable cart items have not yet been initialized',
      `itemCounts: ${JSON.stringify(itemCounts)}`,
    );
  }

  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;
  const newItemCount = getNewItemCount(itemId, operation, itemCounts);

  const newItemCounts = newItemCount === 0 ? restItemCounts : {
    ...restItemCounts,
    [itemId]: newItemCount,
  };

  const newState: UnavailableCartState = {
    ...state,
    ...newItemCounts,
  };

  return newState;
};

const unavailableCartReducer: Reducer<UnavailableCartState, CartActions | ItemListActions> = (
  state,
  action,
) => {
  if (!state) {
    return INITIAL_STATE;
  }

  const { payload: { itemId }, type } = action;

  let newState;

  switch (type) {
    case CartActionType.CART_ITEM_ADDED:

      newState = safelyUpdateCart(state, itemId, UnavailableCartOperation.ADD);

      break;

    case CartActionType.CART_ITEM_REMOVED:

      newState = safelyUpdateCart(state, itemId, UnavailableCartOperation.REMOVE);

      break;

    case ItemListActionType.LIST_ITEM_REMOVED:

      newState = safelyUpdateCart(state, itemId, UnavailableCartOperation.FORCE_REMOVE_ALL);

      break;

    default:

      throw ErrorFactory.createError(
        ErrorType.SHOULD_NOT_REACH_CODE,
        'Unknown cart action type',
        `Cart action: ${type}`,
      );
  }

  return newState;
};

export default unavailableCartReducer;
