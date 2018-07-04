import { Component, OnInit, Input } from '@angular/core';

import { Song } from '../../model/song';

@Component({
  selector: 'mm-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  @Input() song: Song;

  constructor() { }

  ngOnInit() {
  }

}
