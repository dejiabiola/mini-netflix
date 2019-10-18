import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies: any[];
  filteredMovies: any[];
  errorMessage: string = '';
  favouriteMovies: any[];
  // tslint:disable-next-line: variable-name
  _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this._listFilter ? this.performFilter(this._listFilter) : this.movies;
  }

  performFilter(filterBy: string): any {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: any) =>
      movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  constructor(private movieService: MovieService) { }


  ngOnInit() {
    // this.movieService.getStuff().subscribe({
    //   next: data => {
    //     const [result] = data;
    //     this.movies = result;
    //     this.filteredMovies = this.movies;
    //   },
    //   error: err => this.errorMessage = err
    // });
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }
  logClick() {
    console.log('clicked');
  }
}
