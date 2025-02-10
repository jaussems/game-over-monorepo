import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Genres, Result } from '../../services/api.interface';
import { ApiService } from '../../services/api.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    NgClass
  ],
  templateUrl: './side-menu.component.html',
  standalone: true,
  styleUrl: './side-menu.component.scss'
})

export class SideMenuComponent implements OnInit{
  protected _apiService = inject(ApiService);
  private _router = inject(Router);
  hideMenu = input(true);
  genres = signal<Genres["results"]>([]);


  ngOnInit(): void {
    this._apiService.getGenres().subscribe((response) => {
      console.log(response.results)
      this.genres.set(response.results);
    })
  }

  navigateToGenrePage(genreName: string) {
    this._router.navigate([`/genre/${genreName}`]);
  }
}
