import {Store as AppStore, Transaction, MutationToolbox} from '@tinijs/store';

const states = {
  foo: 'Foo -> 0',
  bar: 0,
};
export default states;

export type States = typeof states;
export type Store = AppStore<States>;

export const UPDATE_FOO = function (foo: string) {
  return ({update}: MutationToolbox) => update('foo', () => foo);
} as Transaction;

export const UPDATE_BAR = function (bar: number) {
  return ({update}: MutationToolbox) => update('bar', () => bar);
} as Transaction;
