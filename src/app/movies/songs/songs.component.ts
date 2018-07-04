import { Component, OnInit, Input } from '@angular/core';

import { SongService } from '../services/song.service';
import { SongList } from '../model/song-list';

@Component({
  selector: 'mm-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: SongList;
  params = {
    page: 1,
    pageSize: 6,
    sort: 'name',
    sortDirection: 'desc'
  };

  constructor(private songService: SongService) { }

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
    this.songService.getSongs(this.params).subscribe(res => this.songs = res)
  }

}
