// eslint-disable-next-line max-classes-per-file
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { GridSize, GridTypeMap } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import useSWR from 'swr';
import axios from 'axios';

type RequiredPropNames<Props> = {
  [K in keyof Props]: undefined extends Props[K] ? undefined : K;
}[keyof Props];

type OptionalPropNames<Props> = Exclude<keyof Props, RequiredPropNames<Props>>;

export type DefaultProps<Props> = Required<Pick<Props, OptionalPropNames<Props>>>;

type GridSizes = Required<Pick<GridTypeMap['props'], Breakpoint>>;

export const buildGridSizes = (
  xs: GridSize,
  sm: GridSize,
  md: GridSize,
  lg: GridSize,
  xl: GridSize,
): GridSizes => ({
  lg, md, sm, xl, xs,
});

export class ChangeHandler {
  static getClickHandler = (
    cb: () => void,
  ): MouseEventHandler => (event) => {
    event.stopPropagation();

    cb();
  };

  static getKeyPressHandler = (
    cb: (value: string) => void,
  ): ChangeEventHandler<HTMLInputElement> => (event) => {
    event.stopPropagation();
    event.preventDefault();

    cb(event.target.value);
  };
}

type APIResponse<Data, Error> = {
  data: Data | undefined,
  error: Error | undefined,
};

type APIError = {};

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export class API {
  static get<Data>(url: string): APIResponse<Data, APIError> {
    const { data, error } = useSWR<Data, APIError>(url, fetcher);

    return {
      data,
      error,
    };
  }
}
