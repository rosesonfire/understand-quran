import { combineEpics } from 'redux-observable';

import { epic as availableCartEpic } from './available';
import { epic as unavailableCartEpic } from './unavailable';

export default combineEpics(
  availableCartEpic, unavailableCartEpic,
);
