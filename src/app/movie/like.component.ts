import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie-list/movie.service';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  template: `
  <span (click)="logClick()">
    <fa-icon  [icon]="faHeart" *ngIf="!movieLiked" size="lg"></fa-icon>
    <fa-icon  [icon]="solidHeart" *ngIf="movieLiked" class="red" size="lg"></fa-icon>

  </span>
  `,
  styles: [`
  fa-icon {
    cursor: pointer;
    transition: all 1s;
    transform-origin: 50% 50%;
  }
  fa-icon:hover {
    transform: scale(1.2);
  }
  .red {
    color: red;
  }
  `]
})


export class LikeComponent implements OnInit {
  faHeart = faHeart;
  solidHeart = solidHeart;
  liked: boolean = false;
  @Input() movieId: string;
  @Input() movieLiked: boolean;
  checkLiked;
  movie;
  constructor(private movieService: MovieService) {
   }

  ngOnInit() {

    }

  logClick() {
    this.liked = !this.liked;
    if (this.liked === true) {
      this.movieService.addFavourite(this.movieId);
    } else {
      this.movieService.removeFavourite(this.movieId, this.liked);
    }
  }


}
