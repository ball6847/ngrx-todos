import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class TodoEffects {
  // @Effect() effect$ = this.actions$.ofType(TodoActionTypes.LoadTodos);

  constructor(private actions$: Actions) {}
}
