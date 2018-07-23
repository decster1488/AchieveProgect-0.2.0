import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'front-page',
    pathMatch: 'full'
  },
  {
    path: 'front-page',
    loadChildren: './views/front-page/front-page.module#FrontPageModule'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
