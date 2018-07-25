import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
