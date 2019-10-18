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
  onBack(): void {
    this.router.navigate(['/home']);
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
    this.movie = this.movieService.getMovie(id);
    console.log(this.movie);
  }

}
