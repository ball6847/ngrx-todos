import { Action } from '@ngrx/store';

export enum FooActionTypes {
  LoadFoos = '[Foo] Load Foos'
}

export class Foo implements Action {
  readonly type = FooActionTypes.LoadFoos;
}

export type FooActions = LoadFoos;
