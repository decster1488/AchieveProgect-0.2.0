import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewsRoutingModule } from './views-routing.module';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ViewsRoutingModule
  ],
  declarations: []
})
export class ViewsModule { }
