import { NgModule } from '@angular/core';
import { SafePipe } from './safe';

@NgModule({
  declarations: [
    SafePipe,
  ],
  exports: [
    SafePipe,
  ],
})
export class PipesModule { }
