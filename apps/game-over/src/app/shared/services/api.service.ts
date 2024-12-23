import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RAWGames } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }


  getAllGames() {
    // We mock for now, don't want to loose some credits ;)
    return this._http.get<RAWGames>('https://gamemock.free.beeceptor.com/api/games', {
      params: { page: 1, size: 50 }
    });
  }
}
