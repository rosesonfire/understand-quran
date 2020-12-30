import { createStructuredSelector } from 'reselect';

import { CartState } from './reducer';

import {
  selector as availableCartSelector,
  AvailableCartSelectorsResult,
} from './available';

import {
  selector as unavailableCartSelector,
  UnavailableCartSelectorsResult,
} from './unavailable';

export type CartSelectorsResult = {
  availableItems: AvailableCartSelectorsResult,
  unavailableItems: UnavailableCartSelectorsResult,
};

export default createStructuredSelector<CartState | undefined, CartSelectorsResult>({
  availableItems: state => availableCartSelector(state?.available),
  unavailableItems: state => unavailableCartSelector(state?.unavailable),
});
