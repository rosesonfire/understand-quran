import { createAction } from '@reduxjs/toolkit';

import { ItemId } from '@uqTypes/business/item';

enum CartActionType {
  // CART_INITIALIZED = 'CART_INITIALIZED',
  CART_ITEM_ADDED = 'CART_ITEM_ADDED',
  CART_ITEM_REMOVED = 'CART_ITEM_REMOVED',
}

// eslint-disable-next-line import/prefer-default-export
export class CartActionFactory {
  static addToCart = createAction(
    CartActionType.CART_ITEM_ADDED,
    (itemId: ItemId) => ({
      payload: {
        itemId,
      },
    }),
  );

  static removeFromCart = createAction(
    CartActionType.CART_ITEM_REMOVED,
    (itemId: ItemId) => ({
      payload: {
        itemId,
      },
    }),
  );
}
