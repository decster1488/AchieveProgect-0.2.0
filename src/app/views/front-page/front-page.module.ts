import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    FrontPageRoutingModule
  ],
  declarations: [LoginComponent,
    FrontPageComponent,
    SignupComponent
     ]
})
export class FrontPageModule { }
