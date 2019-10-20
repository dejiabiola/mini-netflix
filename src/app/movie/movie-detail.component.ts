import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie-list/movie.service';
import { faArrowAltCircleLeft as faBack } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  faBack = faBack;
  imageUrl: string = "https://image.tmdb.org/t/p/original";
  onBack(): void {
    this.router.navigate(['/home']);
  }

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
      console.log("id:", id);
      // console.log(typeof(id))
    }
  }

  getProduct(id: string) {
  this.movieService.getMovie(id).subscribe({
    next: data => {
      this.movie = data;
      console.log(data.poster_path);
    }
  });

  }

}
