import { ClientServer } from '@uqTypes/application';

// eslint-disable-next-line import/prefer-default-export
export const getClientOrServerSide = (): ClientServer => (
  typeof window === 'undefined'
    ? ClientServer.SERVER
    : ClientServer.CLIENT
);
