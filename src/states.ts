import {Store as AppStore} from '@tinijs/store';

// define the states here
const states = {
  name: 'TiniJS',
};

// // IMPORTANT: DO NOT import the "store" from this file, use the decorator instead:
// // import {Store, UseStore} from '@tinijs/store';
// // @UseStore() store!: Store;
// export const store = createStore<States>(states);

// add transactions here

export default states;

export type States = typeof states;
export type Store = AppStore<States>;
