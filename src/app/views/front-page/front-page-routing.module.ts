import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontPageComponent} from './front-page.component';
import {LoginComponent} from './login/login.component';
import {SingupComponent} from './singup/singup.component';


const frontPageRouter: Routes = [
  {
    path: '',
    component: FrontPageComponent,
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/singup',
    component: SingupComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(frontPageRouter)],
  exports: [RouterModule]
})



export class FrontPageRoutingModule {

}
