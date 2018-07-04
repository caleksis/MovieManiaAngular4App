import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';
import { GenreService } from './services/genre.service';
import { SongService } from './services/song.service';
import { MoviesComponent } from './movies/movies.component';
import { PaginationComponent } from './movies/pagination/pagination.component';
import { SortationComponent } from './movies/sortation/sortation.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { SongsComponent } from './songs/songs.component';
import { SongListComponent } from './songs/song-list/song-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MoviesRoutingModule
  ],
  providers: [
  	MoviesService,
    GenreService,
    SongService
  ],
  declarations: [
  	MoviesComponent,
 	  PaginationComponent,
  	SortationComponent,
  	MoviesListComponent,
  	MovieEditComponent,
  	SongsComponent,
  	SongListComponent
  ]
})
export class MoviesModule { }
