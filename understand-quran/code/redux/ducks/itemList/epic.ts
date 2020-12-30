import { Epic, ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

import { ItemListActionFactory } from './actions';

const epic: Epic = $action => $action.pipe(
  ofType(ItemListActionFactory.initializeItemList.fulfilled),
  mapTo({
    type: 'SomeAction',
  }),
);

export default epic;
