import { CombinedState, combineReducers } from 'redux';

import {
  reducer as availableCartReducer,
  AvailableCartState,
} from './available';

import {
  reducer as unavailableCartReducer,
  UnavailableCartState,
} from './unavailable';

export type CartState = CombinedState<{
  available: AvailableCartState,
  unavailable: UnavailableCartState,
}>;

export default combineReducers<CartState>({
  available: availableCartReducer,
  unavailable: unavailableCartReducer,
});
