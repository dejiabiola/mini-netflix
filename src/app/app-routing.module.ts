
import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie/movie-detail.component';
import { MovieDetailGuard } from './movie/movie-detail.guard';
import { ProfileComponent } from './user/profile.component';
import { FavouriteComponent } from './movie/favourite.component';


export const AppRoutes: Routes = [
  { path: 'home', component: MovieListComponent },
  { path: 'movie/:id', canActivate: [MovieDetailGuard], component: MovieDetailComponent },
  {path: 'movies/favourite', component: FavouriteComponent},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: MovieListComponent }

];


