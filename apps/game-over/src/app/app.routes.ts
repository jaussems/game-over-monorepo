import { Route } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { GameDetailsComponent } from './pages/details/game-details/game-details.component';
import { GenreComponent } from './pages/genre/genre.component';

export const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path:'game-details/:id', component:GameDetailsComponent},
  {path: 'genre/:genreId', component:GenreComponent}
];
