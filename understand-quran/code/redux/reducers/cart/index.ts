import { CombinedState, combineReducers } from 'redux';

import available, { AvailableCartState } from './available';
import unavailable, { UnavailableCartState } from './unavailable';

export type CartState = CombinedState<{
  available: AvailableCartState,
  unavailable: UnavailableCartState,
}>;

export default combineReducers<CartState>({
  available,
  unavailable,
});
