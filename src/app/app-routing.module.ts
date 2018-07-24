import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorPageComponent} from './core/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'front-page',
    pathMatch: 'full'
  },
  {
    path: 'front-page',
    loadChildren: './views/front-page/front-page.module#FrontPageModule'
  },
  {
    path: '**',
    component: ErrorPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
