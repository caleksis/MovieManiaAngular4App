import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Song } from '../model/song';
import { SongList } from '../model/song-list';

const baseUrl = "http://localhost:3000/api/songs";

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  getSongs(params?: any) {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
          .set("sort", params.sort && params.sort.toString() || '')
          .set("sortDirection", params.sortDirection && params.sortDirection.toString() || '')
          .set("page", params.page && params.page.toString() || '1')
          .set("pageSize", params.pageSize && params.pageSize.toString() || '5')
      }
    }

    return this.http.get<SongList>(baseUrl, queryParams).map(res => {
      return new SongList(res);
    });
  }

  getMovie(id: number) {
    return this.http.get<Song>(baseUrl + "/" + id).map(res => {
      return new Song(res);
    }); 
  }

  saveOrUpdate(song: Song) {
    if(song._id) {
      return this.http.put<Song>(baseUrl + "/" + song._id, song).map(res => {
        return new Song(res);
      });
    } else {
      return this.http.post<Song>(baseUrl, song).map(res => {
        return new Song(res);
      });
    }
  }
}