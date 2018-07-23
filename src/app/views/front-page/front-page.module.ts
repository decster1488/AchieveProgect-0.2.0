import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';


@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  declarations: [LoginComponent,
    SingupComponent]
})
export class FrontPageModule { }
