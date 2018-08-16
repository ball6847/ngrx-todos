import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from '../todo/state/todo.effects';
import * as fromFoo from './state/foo.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('foo', fromFoo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: []
})
export class FooModule {}
