import { ChangeEventHandler } from 'react';
import { GridSize, GridTypeMap } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

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

export const getKeyPressHandler: (
  cb: (value: string) => void,
) => ChangeEventHandler<HTMLInputElement> = (
  cb: (value: string) => void,
) => (event) => {
  event.stopPropagation();
  event.preventDefault();

  cb(event.target.value);
};
