import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie-list/movie.service';
import { faArrowAltCircleDown as faDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  moreDetail;
  faDown = faDown;
  imageUrl: string = "https://image.tmdb.org/t/p/original";


  setImage() {
    return `${this.imageUrl}${this.movie.poster_path}`;
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: string) {
  this.movieService.getMovie(id).subscribe({
    next: data => {
      this.movie = data;
      this.getOmdb(this.movie.imdb_id);
    }
  });

  }

  getOmdb(imdb_id: string) {
    this.movieService.getOmdb(imdb_id).subscribe({
      next: data => {
        this.moreDetail = data;
      }
    })
  }

  onClick(){
    let x = document.querySelector("#movie-details");
    if (x){
        x.scrollIntoView();
    }
}

  setBackgroundImage(): object {
    const styles = {
      'background-size': 'cover',
      'background-image': `url(${this.imageUrl}${this.movie.backdrop_path})`,
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed',
      height: '100vh'
    };
    return styles;
  }

  homepage() {
    if(this.movie.homepage){
      return this.movie.homepage;
    } else {
      return;
    }
  }
}
