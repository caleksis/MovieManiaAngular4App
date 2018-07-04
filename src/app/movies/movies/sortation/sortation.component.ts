import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-sortation',
  templateUrl: './sortation.component.html',
  styleUrls: ['./sortation.component.css']
})
export class SortationComponent implements OnInit {
  @Output() sortChange = new EventEmitter();

  sort: string = "rating";
  sortDirection: string = "desc";

  constructor() { }

  ngOnInit() {
  }

  changeDirection() {
    this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    this.sortChange.emit({"sortDirection": this.sortDirection});
  }

  changeSort() {
    this.sortChange.emit({"sort": this.sort});
  }
}