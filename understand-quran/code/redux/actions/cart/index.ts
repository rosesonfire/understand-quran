import { ItemId } from '@uqTypes/business/item';
import { Action } from '@uqTypes/application/redux';

export enum CartActionType {
  CART_INITIALIZED = 'CART_INITIALIZED',
  CART_ITEM_ADDED = 'CART_ITEM_ADDED',
  CART_ITEM_REMOVED = 'CART_ITEM_REMOVED',
}

export type CartAction<Payload> = Action<CartActionType, Payload>;

export type InitializeCart = {
  itemIds: ItemId[],
};

export type AddToCartActionPayload = {
  itemId: ItemId,
};

export type RemoveFromCartActionPayload = {
  itemId: ItemId,
};

export type AddToCartAction = CartAction<AddToCartActionPayload> & {
  type: CartActionType.CART_ITEM_ADDED,
};

export type RemoveFromCartAction = CartAction<RemoveFromCartActionPayload> & {
  type: CartActionType.CART_ITEM_REMOVED
};

export type CartActions = AddToCartAction | RemoveFromCartAction;

export class CartActionFactory {
  static addToCart = (itemId: ItemId): AddToCartAction => ({
    payload: {
      itemId,
    },
    type: CartActionType.CART_ITEM_ADDED,
  });

  static removeFromCart = (itemId: ItemId): RemoveFromCartAction => ({
    payload: {
      itemId,
    },
    type: CartActionType.CART_ITEM_REMOVED,
  });
}
