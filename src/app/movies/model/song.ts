export class Song {
  _id: number;
  song: string;
  artist: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.song = obj && obj.song || "";
    this.artist = obj && obj.artist || "";
  }
}