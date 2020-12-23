import { createStructuredSelector } from 'reselect';

import { State } from '@redux/reducers';
import { CartState } from '@redux/reducers/cart';

import availableItemsSelector from './availableItems';
import unavailableItemsSelector from './unavailableItems';

export default createStructuredSelector<State, CartState>({
  available: availableItemsSelector,
  unavailable: unavailableItemsSelector,
});
