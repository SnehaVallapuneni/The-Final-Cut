import { CommonModule } from '@angular/common';
import { Component, Input,  OnInit } from '@angular/core';
@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {

  @Input() rating = 0;
  @Input() max = 5;
  @Input() isReadOnly = false;

  stars: number[] = [];

  rate(value: number) {
    if (!this.isReadOnly) {
      this.rating = value;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.stars = Array(this.max).fill(0);
  }

}