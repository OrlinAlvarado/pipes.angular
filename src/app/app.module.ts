import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localEs from '@angular/common/locales/global/es';
import localFr from '@angular/common/locales/global/fr';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localEs, 'es-HN');
registerLocaleData(localFr, 'fr-CA');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'es' 
    }    //linea agregada
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
