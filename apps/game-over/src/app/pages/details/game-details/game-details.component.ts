import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../shared/services/api.interface';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent implements OnInit{
  private _apiService: ApiService = inject(ApiService);
  protected gameDetails = signal<Game | null>(null);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.getGameDetails(id);
  }

  getGameDetails(id: number) {
    this._apiService.getDetailsOfGame(id).subscribe((value) => {
      this.gameDetails.set(value);
    })
  }

}
