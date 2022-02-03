import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PackagesComponent,
    NotfoundComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [HomeComponent,ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
