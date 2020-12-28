import { CombinedState, combineReducers } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  availableCartReducers,
  AvailableCartState,
  availableCartSelectors,
  AvailableCartSelectorsResult,
} from './available';

import {
  unavailableCartReducers,
  UnavailableCartState,
  unavailableCartSelectors,
  UnavailableCartSelectorsResult,
} from './unavailable';

export type CartState = CombinedState<{
  available: AvailableCartState,
  unavailable: UnavailableCartState,
}>;

export const cartReducers = combineReducers<CartState>({
  available: availableCartReducers,
  unavailable: unavailableCartReducers,
});

export type CartSelectorsResult = {
  availableItems: AvailableCartSelectorsResult,
  unavailableItems: UnavailableCartSelectorsResult,
};

export const cartSelectors = createStructuredSelector<CartState, CartSelectorsResult>({
  availableItems: ({ available }) => availableCartSelectors(available),
  unavailableItems: ({ unavailable }) => unavailableCartSelectors(unavailable),
});
