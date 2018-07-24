import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontPageComponent} from './front-page.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';


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
    component: SignupComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(frontPageRouter)],
  exports: [RouterModule]
})


export class FrontPageRoutingModule {

}
