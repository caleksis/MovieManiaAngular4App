import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    HomeComponent, 
    NavbarComponent
  ],
  exports: [
  	NavbarComponent
  ]
})
export class CoreModule { }
