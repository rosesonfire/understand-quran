import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { Item, ItemId } from '@uqTypes/business/item';
import { httpFetcher } from '@utils/http';

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

  static initializeItemList = createAsyncThunk(
    ItemListActionType.LIST_ITEMS_INITIALIZED,
    async () => ({
      items: await httpFetcher<Item[]>('/api/items'),
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
