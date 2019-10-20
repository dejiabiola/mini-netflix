import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies ;
  errorMessage: string = '';
  favouriteMovies: any[];
  searchWord: string;
  isSearch: boolean = false;




  constructor(private movieService: MovieService) { }

  searchMovie() {
    this.isSearch = true;
    this.movieService.searchMovie(this.searchWord).subscribe({
      next: data => {
        const {Search} = data;
        this.movies = Search;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnInit() {
    this.favouriteMovies = this.movieService.getFavourite();
    this.movieService.getStuff().subscribe({
      next: data => {
        const {results} = data;
        this.movies = results;
      },
      error: err => this.errorMessage = err
    });
  }
}
