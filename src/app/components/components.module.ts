import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/services/pipes/pipes.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';

import { LazyLoadImageModule } from 'ng-lazyload-image'; 


@NgModule({
  declarations: [
    CardComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    LazyLoadImageModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    CardComponent,
    SidenavComponent,
    LazyLoadImageModule
  ]
})
export class ComponentsModule { }
