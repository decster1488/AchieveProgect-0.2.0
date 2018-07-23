import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';

@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  declarations: [FrontPageComponent]
})
export class FrontPageModule { }
