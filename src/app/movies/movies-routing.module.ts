import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { MoviesComponent } from './movies/movies.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { SongsComponent } from './songs/songs.component';

const moviesRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieEditComponent },
  { path: 'songs', component: SongsComponent},
];
 
@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }