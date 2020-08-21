import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  // {path:'signup', component:SignupComponent},
  {path:'', component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
