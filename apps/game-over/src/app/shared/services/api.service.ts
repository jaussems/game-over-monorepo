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
    return this._http.get<RAWGames>('http://localhost:3000/games', {
      params: { page: 1, size: 50 }
    });
  }

  getDetailsOfGame(id:number) {
    // return this._http.get<Game>(`https://gamemock3.free.beeceptor.com/api/games/${id}`, {
    return this._http.get<Game>(`http://localhost:3000/game-details`, {
    })
  }

  getGamesWithGenres(genre: string) {
    return this._http.get<RAWGames>(`https://api.rawg.io/api/games?key=&genres=${genre}`, {})
  }

  getGenres() {
    return this._http.get<Genres>("http://localhost:3000/genres")
  }
}
