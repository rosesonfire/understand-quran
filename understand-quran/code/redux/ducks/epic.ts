import { combineEpics, Epic, ofType } from 'redux-observable';
import {
  catchError,
  debounce,
  map,
  mergeMap,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';

import { ItemId } from '@uqTypes/business/item';

import { epic as cartEpic } from './cart';
import { epic as itemListEpic } from './itemList';
import { ActionFactory } from './actions';

const debounceSearch: Epic = $action => $action.pipe(
  ofType<
  ReturnType<typeof ActionFactory.initiateSearch>,
  ReturnType<typeof ActionFactory.initiateSearch>,
  typeof ActionFactory.initiateSearch.type
  >(ActionFactory.initiateSearch.type),
  debounce(() => interval(200)),
  mergeMap(({ payload: { searchText, url } }) => ajax.getJSON<ItemId[]>(url).pipe(
    map((itemIds) => ({ itemIds, searchText })),
  )),
  map(({ itemIds, searchText }) => ActionFactory.completeSearch(searchText, itemIds)),
);

const epic: Epic = (
  action$, store$, dependencies,
) => combineEpics(
  cartEpic, itemListEpic, debounceSearch,
)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    // eslint-disable-next-line no-console
    console.error(error);

    return source;
  }),
);

export default epic;
