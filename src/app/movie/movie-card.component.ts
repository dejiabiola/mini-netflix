import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  imageUrl: string = "https://image.tmdb.org/t/p/original";
  constructor() { }

  ngOnInit() {
  }

  setImage() {
    return `${this.imageUrl}${this.movie.poster_path}`;
  }


}
