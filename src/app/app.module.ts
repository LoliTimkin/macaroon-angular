import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { GoodComponent } from './components/good/good.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import {BackgroundButtonDirective} from './directives/background-button.directive';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { FormatPhoneNumberPipe } from './pipes/format-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoodComponent,
    AdvantagesComponent,
    BackgroundButtonDirective,
    ShortTextPipe,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
