import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class CoreRoutingModule { }

export const CoreRoutingComponents = [
  LoginComponent,
  SignupComponent,
  LandingComponent
]