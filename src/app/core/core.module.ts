import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule, CoreRoutingComponents } from './core-routing.module';

@NgModule({
  declarations: [
    CoreRoutingComponents
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
