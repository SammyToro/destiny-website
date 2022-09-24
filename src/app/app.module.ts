import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdbScrollspyModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
