import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../shared/services/api.service';
import { RAWGames } from '../shared/services/api.interface';
import { Router } from '@angular/router';
import { ViewtransitionDirective } from '../shared/directive/viewtransition.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ViewtransitionDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private _apiService: ApiService = inject(ApiService);
  private _router: Router = inject(Router);
  responseData = signal<RAWGames | null>(null);
  results =computed(() => this.responseData()?.results)
  public selectedId = signal<number>(0);

  ngOnInit() {
    this.getGamesAPICall()
  }
  getGamesAPICall() {
    this._apiService.getAllGames().subscribe((value) => {
      this.responseData.set(value);
    });
  }


  navigateToGameById(id: number) {
    this._router.navigateByUrl('game-details/' + id);
    this.selectedId.set(id);
  }

}
