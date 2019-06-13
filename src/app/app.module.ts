import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WarningAlertComponent} from './warningAlert/warningAlert.component';
import {SuccessAlertComponent} from './successAlert/successAlert.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
