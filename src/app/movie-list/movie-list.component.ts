import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies: object;
  errorMessage: string = '';
  favouriteMovies: any[];
  searchWord: string;




  constructor(private movieService: MovieService) { }

  // searchMovie() {
  //   this.movieService.searchMovie().subscribe({
  //     next: data => {
  //       const {results} = data;
  //       this.movies = results;
  //     },
  //     error: err => this.errorMessage = err
  //   });
  // }

  ngOnInit() {
    this.movieService.getStuff().subscribe({
      next: data => {
        const {results} = data;
        this.movies = results;
      },
      error: err => this.errorMessage = err
    });
  }
  logClick() {
    console.log('clicked');
  }
}
