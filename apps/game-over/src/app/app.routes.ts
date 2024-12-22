import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';

export const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
];
