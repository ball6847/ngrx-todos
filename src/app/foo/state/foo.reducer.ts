import { FooActions, FooActionTypes } from './foo.actions';

export interface FooState {
  foo: FooData;
}

interface FooData {
  bar: string;
}

export const initialState: FooData = {
  bar: 'foobar!'
};

export function reducer(state = initialState, action: FooActions): FooData {
  switch (action.type) {
    case FooActionTypes.LoadFoos:
      return state;

    default:
      return state;
  }
}
