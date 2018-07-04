import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../model/movie';

@Component({
  selector: 'mm-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
