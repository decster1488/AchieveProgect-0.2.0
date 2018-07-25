import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule

  ],
  declarations: [],
  providers: [
    UserServiceService,
  ]
})
export class SharedModule { }
