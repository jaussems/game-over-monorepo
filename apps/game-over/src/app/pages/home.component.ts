import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../shared/services/api.service';
import { RAWGames } from '../shared/services/api.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private _apiService: ApiService = inject(ApiService);
  responseData = signal<RAWGames | null>(null);
  results =computed(() => this.responseData()?.results)

  ngOnInit() {
    this.getGamesAPICall()
  }
  getGamesAPICall() {
    this._apiService.getAllGames().subscribe((value) => {
      this.responseData.set(value);
    });
  }
}
