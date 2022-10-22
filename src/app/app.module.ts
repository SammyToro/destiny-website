import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdbRippleModule,
    MdbScrollspyModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
