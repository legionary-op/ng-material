import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule, MainRoutingComponents } from './main-routing.module';

@NgModule({
  declarations: [
    MainRoutingComponents
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
