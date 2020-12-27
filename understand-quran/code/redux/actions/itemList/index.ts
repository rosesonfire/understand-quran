import { createAction } from '@reduxjs/toolkit';

import { Item, ItemId } from '@uqTypes/business/item';

export enum ItemListActionType {
  LIST_ITEMS_INITIALIZED = 'LIST_ITEMS_INITIALIZED',
  LIST_ITEM_ADDED = 'LIST_ITEM_ADDED',
  LIST_ITEM_REMOVED = 'LIST_ITEM_REMOVED',
}

export type ListItemAddedActionPayload = {
  itemId: ItemId,
};

export type ListItemRemovedActionPayload = {
  itemId: ItemId,
};

export class ItemListActionFactory {
  static addToItemList = createAction(
    ItemListActionType.LIST_ITEM_ADDED,
    (item: Item) => ({
      payload: {
        item,
      },
    }),
  );

  static initializeItemList = createAction(
    ItemListActionType.LIST_ITEMS_INITIALIZED,
    (items: Item[]) => ({
      payload: {
        items,
      },
    }),
  );

  static removeFromItemList = createAction(
    ItemListActionType.LIST_ITEM_REMOVED,
    (itemId: ItemId) => ({
      payload: {
        itemId,
      },
    }),
  );
}
