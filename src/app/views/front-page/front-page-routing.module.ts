import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontPageComponent} from './front-page/front-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

const frontPageRouter: Routes = [
  {
    path: '',
    component: FrontPageComponent
  }
]

export class FrontPageRoutingModule {

}
