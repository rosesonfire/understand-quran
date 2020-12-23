import {
  Action as ReduxAction,
  Reducer as ReduxReducer,
} from 'redux';

export type Action<Type extends string, Payload> = ReduxAction<Type> & {
  payload: Payload,
};

export type AnyAction = Action<any, any>;

export type Reducer<State, A extends AnyAction> = ReduxReducer<State, A>;
