import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FooActions, FooActionTypes } from './foo.actions';

@Injectable()
export class FooEffects {

  @Effect()
  effect$ = this.actions$.ofType(FooActionTypes.LoadFoos);

  constructor(private actions$: Actions) {}
}
