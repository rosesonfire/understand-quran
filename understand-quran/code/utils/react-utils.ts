/* eslint-disable max-classes-per-file */

import { GridSize, GridTypeMap } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';

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

  static getKeyDownHandler = (
    cb: (key: string) => void,
  ): KeyboardEventHandler<HTMLElement> => (
    event: KeyboardEvent<HTMLElement>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    cb(event.key);
  };

  static getKeyPressHandler = (
    cb: (value: string) => void,
  ): ChangeEventHandler<HTMLInputElement> => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    cb(event.target.value);
  };
}
