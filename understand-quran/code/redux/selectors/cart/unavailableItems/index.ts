import { createStructuredSelector } from 'reselect';

import { State } from '@redux/reducers';
import { UnavailableCartState } from '@redux/reducers/cart/unavailable';

const unavailableItemCountSelector = (state: State) => state.cart.unavailable.itemCounts;

export default createStructuredSelector<State, UnavailableCartState>({
  itemCounts: unavailableItemCountSelector,
});
