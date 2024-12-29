import { Route } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { GameDetailsComponent } from './pages/details/game-details/game-details.component';

export const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path:'game-details/:id', component:GameDetailsComponent}
];
