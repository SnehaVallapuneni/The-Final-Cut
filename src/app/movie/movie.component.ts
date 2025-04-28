import { Component } from '@angular/core';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [StarRatingComponent, HeaderComponent, CommonModule],
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
