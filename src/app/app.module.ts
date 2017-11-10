import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Features module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// app components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // include TeslaBatteryModule
    TeslaBatteryModule
  ],
  providers: [],
  // bootstrap the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
