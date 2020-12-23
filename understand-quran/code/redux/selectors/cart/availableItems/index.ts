import { createStructuredSelector } from 'reselect';

import { State } from '@redux/reducers';
import { AvailableCartState } from '@redux/reducers/cart/available';

const availableItemCountSelector = (state: State) => state.cart.available.itemCounts;

export default createStructuredSelector<State, AvailableCartState>({
  itemCounts: availableItemCountSelector,
});
