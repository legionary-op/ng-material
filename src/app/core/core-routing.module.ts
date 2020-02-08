import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, LandingComponent],
  imports: [
    CommonModule
  ]
})
export class CoreRoutingModule { }