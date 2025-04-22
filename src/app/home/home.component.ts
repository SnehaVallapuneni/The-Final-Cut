import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,StarRatingComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

}
