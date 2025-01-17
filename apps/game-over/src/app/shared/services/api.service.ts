import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, Genres, RAWGames } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  getAllGames() {
    // We mock for now, don't want to loose some credits ;)
    return this._http.get<RAWGames>('https://gamemock2.free.beeceptor.com/api/games', {
      params: { page: 1, size: 50 }
    });
  }

  getDetailsOfGame(id:number) {
    return this._http.get<Game>(`https://gamemock2.free.beeceptor.com/api/games/${id}`, {
    })
  }

  getGenres() {
    return this._http.get<Genres>("https://gamemock2.free.beeceptor.com/api/genres")
  }
}
