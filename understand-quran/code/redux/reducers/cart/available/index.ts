import { Reducer } from '@uqTypes/application/redux';
import { ItemId } from '@uqTypes/business/item';
import { CartActions, CartActionType } from '@redux/actions/cart';
import { ItemListActions, ItemListActionType } from '@redux/actions/itemList';
import { ErrorType, ErrorFactory } from '@errors';

enum AvailableCartOperation {
  ADD,
  REMOVE,
  FORCE_REMOVE_ALL,
}

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

const createUnknownAvailableCartOperationError = (
  operation: AvailableCartOperation,
) => ErrorFactory.createError(
  ErrorType.SHOULD_NOT_REACH_CODE,
  'Unknown available cart operation',
  `Available cart operation: ${operation}`,
);

const getNewItemCount = (
  itemId: ItemId,
  operation: AvailableCartOperation,
  itemCounts: AvailableCartItemCounts,
): number => {
  let newItemCount: number;

  if (itemId in itemCounts) {
    const currentItemCount = itemCounts[itemId];

    switch (operation) {
      case AvailableCartOperation.ADD:

        newItemCount = currentItemCount + 1;

        break;

      case AvailableCartOperation.REMOVE:

        if (currentItemCount < 1) {
          throw createItemNotInAvailableCartError(itemCounts);
        }

        newItemCount = currentItemCount - 1;

        break;

      case AvailableCartOperation.FORCE_REMOVE_ALL:

        newItemCount = 0;

        break;

      default:

        throw createUnknownAvailableCartOperationError(operation);
    }
  } else {
    switch (operation) {
      case AvailableCartOperation.ADD:

        newItemCount = 1;

        break;

      case AvailableCartOperation.REMOVE:

        throw createItemNotInAvailableCartError(itemCounts);

      case AvailableCartOperation.FORCE_REMOVE_ALL:

        newItemCount = 0;

        break;

      default:

        throw createUnknownAvailableCartOperationError(operation);
    }
  }

  return newItemCount;
};

const safelyUpdateCart = (
  state: AvailableCartState,
  itemId: ItemId,
  operation: AvailableCartOperation,
): AvailableCartState => {
  const { itemCounts } = state;

  if (!itemCounts) {
    throw ErrorFactory.createError(
      ErrorType.OBJECT_NOT_INITIALIZED,
      'Available cart items have not yet been initialized',
      `itemCounts: ${JSON.stringify(itemCounts)}`,
    );
  }

  const { [itemId]: currentItemCount, ...restItemCounts } = itemCounts;
  const newItemCount = getNewItemCount(itemId, operation, itemCounts);

  const newItemCounts = newItemCount === 0 ? restItemCounts : {
    ...restItemCounts,
    [itemId]: newItemCount,
  };

  const newState: AvailableCartState = {
    ...state,
    ...newItemCounts,
  };

  return newState;
};

const availableCartReducer: Reducer<AvailableCartState, CartActions | ItemListActions> = (
  state,
  action,
) => {
  if (!state) {
    return INITIAL_STATE;
  }

  let newState;

  const { payload: { itemId }, type } = action;

  switch (type) {
    case CartActionType.CART_ITEM_ADDED:

      newState = safelyUpdateCart(state, itemId, AvailableCartOperation.ADD);

      break;

    case CartActionType.CART_ITEM_REMOVED:

      newState = safelyUpdateCart(state, itemId, AvailableCartOperation.REMOVE);

      break;

    case ItemListActionType.LIST_ITEM_REMOVED:

      newState = safelyUpdateCart(state, itemId, AvailableCartOperation.FORCE_REMOVE_ALL);

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

export default availableCartReducer;
