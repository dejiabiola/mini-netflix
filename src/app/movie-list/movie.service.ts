import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseurl: string = "https://api.themoviedb.org/3/";
  api: string = "?api_key=dfa4dc3c982505ce0371c16aa63b6f02";
  getMovieUrl: string = "https://api.themoviedb.org/3/movie/";
  STORAGE_KEY = 'local_favourites';
  currentFavouriteMovies;
  favouriteMovie;



  getStuff(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}movie/popular${this.api}`)
    .pipe(
      tap(data => console.log('ALL:')),
      catchError(this.handleError)
    );
  }

  getMovie(id): Observable<any> {
    return this.http.get<any>(`${this.getMovieUrl}${id}${this.api}`)
    .pipe(
      tap(data => console.log(data))
      ,catchError(this.handleError));
  }

  getOmdb(id): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=98c4ac1b&i=${id}`)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError));
  }

  searchMovie(title: string): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?s=${title}&apikey=98c4ac1b`)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


  addFavourite(id: string){
    this.currentFavouriteMovies = this.storage.get(this.STORAGE_KEY) || [];
    const film = this.currentFavouriteMovies.find(movie => movie.id === id);
    if (film && film.liked === true) {
      return;
    } else {
      this.getMovie(id).subscribe({
        next: movie => {
          this.favouriteMovie = movie;

          this.currentFavouriteMovies.push(movie);
          this.storage.set(this.STORAGE_KEY, this.currentFavouriteMovies);
          console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
        }
      });
    }
  }


  removeFavourite(id: string) {
    this.currentFavouriteMovies = this.storage.get(this.STORAGE_KEY);
    const film = this.currentFavouriteMovies.find(movie => movie.id === id);
    this.currentFavouriteMovies = this.currentFavouriteMovies.filter(movie => movie.id !== id);
    this.storage.set(this.STORAGE_KEY, this.currentFavouriteMovies);
  }


  getFavourite() {
    return this.storage.get(this.STORAGE_KEY) || [];
  }




  constructor(private http: HttpClient,
              @Inject(LOCAL_STORAGE) private storage: StorageService) { }
}


