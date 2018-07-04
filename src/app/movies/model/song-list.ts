import { Song } from "./song";

export class SongList {
  count: number;
  results: Song[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Song(elem); }) || [];
  }
}