import {Store as AppStore, createUpdateTransaction} from '@tinijs/store';

const states = {
  name: 'App',
};
export default states;

export type States = typeof states;
export type Store = AppStore<States>;

export const CHANGE_NAME = createUpdateTransaction<string, string>(
  'name',
  name => name
);
