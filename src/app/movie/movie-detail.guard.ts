import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../movie-list/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailGuard implements CanActivate {
  constructor(private router: Router, private movieService: MovieService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = next.url[1].path;
    const valid = this.movieService.getMovie(id);
    if (!valid) {
      alert('Invalid movie Id');
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}

