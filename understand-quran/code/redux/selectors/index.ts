import { createStructuredSelector } from 'reselect';

import { State } from '@redux/reducers';

import cartSelector from './cart';
import itemListSelector from './itemList';

export default createStructuredSelector<State, State>({
  cart: cartSelector,
  itemList: itemListSelector,
});
