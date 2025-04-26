import { Component } from '@angular/core';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [StarRatingComponent, HeaderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;
}
