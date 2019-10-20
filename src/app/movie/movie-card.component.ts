import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  favouriteMovies;
  b: string;
  imageUrl: string = "https://image.tmdb.org/t/p/original";
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  setImage() {
    if (this.movie.poster_path){
      return `${this.imageUrl}${this.movie.poster_path}`;
    }
    else {
      return this.movie.Poster;
    }
  }

  setId() {
    if (this.movie.id) {
      return this.movie.id;
    }
    return this.movie.imdbID;
  }

  setDate() {
    if (this.movie.release_date) {
      const date = this.movie.release_date.split("-");
      return date[0];
    }
  }

  checkLiked(movie) {
    this.favouriteMovies = this.movieService.getFavourite();
    const check = this.favouriteMovies.find(mov => mov.id === movie.id);
    if (check) {
      return true;
    } else {
      return false;
    }
  }


}
