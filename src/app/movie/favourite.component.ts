import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-list/movie.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-favourite',
  template: `

    <section >
      <div *ngIf="getList()" class="div">
      <h1 >You currently have no favourite movie</h1>
      <p class="empty">You can go back to the <a [routerLink]="['/home']">home page</a> and click on the heart icon on any movie to add it to this list.
      </div>
      <div *ngFor="let movie of favouriteMovies" class="container">
        <div class="image">
          <img [src]="movie.image.url" [alt]="movie.title" height="400px" width="300px">
        </div>
        <div class="text">
          <p class="title">{{ movie.title }}</p>
          <p>{{  movie.description }}</p>
          <p>Year: {{ movie.releaseYear }}</p>
          <p>Genre: {{ movie.genre }}</p>
          <p>Rating: {{ movie.rating }}/10</p>
        </div>
      </div>
    </section>
  `,
  styles: [`

    .login-section {
      text-align: center;
      margin-top: 80px;
    }

    .p {
      text-align: center;
      color: white;
      font-size: 3em;
      font-weight: bold;
    }

    .container {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 30px;
      max-height: 500px;
      margin-left: 120px !important;
      margin-right: 0px !important;
      width: 100%;
    }


    img {
      margin-left: 0;
    }
    .text {
      padding-left: 50px;
      padding-right: 20px;
      background-color: black;
      width: 100%;
      margin-right: 0px !important;
    }
    .div {
      border: .5px solid red;
    }
    section {
      margin: 100px 2% !important;
      padding: 0 !important;
    }
    p {
      color: white;
    }
    .title {
      font-size: 2.5rem;
    }
    h1 {
      color: white;
      font-size: 4rem;
      text-align: center;
    }
    .empty {
      text-align: center;
    }
  `]
})
export class FavouriteComponent implements OnInit {
  favouriteMovies: any[];
  constructor(private movieService: MovieService,
              public auth: AuthService) { }

  ngOnInit() {
    this.favouriteMovies = this.movieService.getFavourite();
  }

  getList() {
    if (this.favouriteMovies.length === 0) {
      return true;
    }
  }

}
