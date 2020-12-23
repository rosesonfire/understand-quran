import { ItemId } from '@uqTypes/business/item';
import { Action } from '@uqTypes/application/redux';

export enum ItemListActionType {
  LIST_ITEM_ADDED = 'LIST_ITEM_ADDED',
  LIST_ITEM_REMOVED = 'LIST_ITEM_REMOVED',
}

export type ItemListAction<Payload> = Action<ItemListActionType, Payload>;

export type AddToItemListActionPayload = {
  itemId: ItemId,
};

export type RemoveFromItemListActionPayload = {
  itemId: ItemId,
};

export type AddToItemListAction = ItemListAction<AddToItemListActionPayload> & {
  type: ItemListActionType.LIST_ITEM_ADDED,
};

export type RemoveFromItemListAction = ItemListAction<RemoveFromItemListActionPayload> & {
  type: ItemListActionType.LIST_ITEM_REMOVED,
};

export type ItemListActions = AddToItemListAction | RemoveFromItemListAction;

export class ItemListActionFactory {
  static addToItemList = (itemId: ItemId): AddToItemListAction => ({
    payload: {
      itemId,
    },
    type: ItemListActionType.LIST_ITEM_ADDED,
  });

  static removeFromItemList = (itemId: ItemId): RemoveFromItemListAction => ({
    payload: {
      itemId,
    },
    type: ItemListActionType.LIST_ITEM_REMOVED,
  });
}
