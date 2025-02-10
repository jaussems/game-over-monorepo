import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { RAWGames } from '../../shared/services/api.interface';

@Component({
  selector: 'app-genre',
  imports: [],
  templateUrl: './genre.component.html',
  standalone: true,
  styleUrl: './genre.component.scss'
})
export class GenreComponent implements OnInit{
  private activeRoute = inject(ActivatedRoute)
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  genreId = signal(this.activeRoute.snapshot.params['genreId']);
  responseData = signal<RAWGames | null>(null);
  results =computed(() => this.responseData()?.results)


  ngOnInit() {
    this._apiService.getGamesWithGenres(this.genreId().toLocaleLowerCase()).subscribe((value) => {
      this.responseData.set(value);
    })
  }

  navigateToGameById(id: number) {
    this._router.navigateByUrl('game-details/' + id);
  }

}
