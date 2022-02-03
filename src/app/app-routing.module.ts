import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Router,Routes,RouterModule}from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PackagesComponent } from './components/packages/packages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'packages',component:PackagesComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
