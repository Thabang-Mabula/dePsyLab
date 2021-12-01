import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CenterDivComponent } from './center-div/center-div.component';
import { NavButtonComponent } from './journey-nav-button/journey-nav-button.component';


@NgModule({
  declarations: [AppComponent, CenterDivComponent, NavButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
