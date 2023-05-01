import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { RouterModule } from '@angular/router';
import { SalesModule } from './sales/sales.module';


//Configuracion del locale de la app
import es from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';


registerLocaleData (es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
