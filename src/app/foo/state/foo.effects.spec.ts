import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FooEffects } from './foo.effects';

describe('FooService', () => {
  let actions$: Observable<any>;
  let effects: FooEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FooEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FooEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
