import { createStructuredSelector } from 'reselect';

import { CartState } from '@redux/reducers/cart';

import availableItemsSelectors, { AvailableCartItemsResult } from './availableItems';
import unavailableItemsSelectors, { UnavailableCartItemsResult } from './unavailableItems';

export type CartSelectorResult = {
  availableItems: AvailableCartItemsResult,
  unavailableItems: UnavailableCartItemsResult,
};

export default createStructuredSelector<CartState, CartSelectorResult>({
  availableItems: ({ available }) => availableItemsSelectors(available),
  unavailableItems: ({ unavailable }) => unavailableItemsSelectors(unavailable),
});
