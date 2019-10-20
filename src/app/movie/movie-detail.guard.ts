import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../movie-list/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailGuard implements CanActivate {
  valid: any = false;
  constructor(private router: Router, private movieService: MovieService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = next.url[1].path;
    this.movieService.getMovie(id).subscribe({
      next: data => {
        this.valid = data;
      }
    });
    return true;
  }
}

