import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  declarations: [LoginComponent,
    FrontPageComponent,
    SignupComponent
     ]
})
export class FrontPageModule { }
