import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './core/home/home.component';

const coreRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }