import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from 'src/services/pipes/pipes.module';
import { ApiService } from 'src/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LazyLoadImageModule,
    ComponentsModule
  ],
  providers: [
    ApiService,
    PipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
