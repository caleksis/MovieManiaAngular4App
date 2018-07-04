import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { MovieList } from '../model/movie-list';

@Component({
  selector: 'mm-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MovieList;
  params = {
    page: 1,
    pageSize: 6,
    sort: 'rating',
    sortDirection: 'desc'
  };

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.updateParams();
  }

  updateParams(params?: any) {
    if(params) {
      this.params.pageSize = params.pageSize || this.params.pageSize;
      this.params.page = params.page || this.params.page;
      this.params.sort = params.sort || this.params.sort;
      this.params.sortDirection = params.sortDirection || this.params.sortDirection;
    }
    this.moviesService.getAll(this.params).subscribe(res => this.movies = res)
  }

}