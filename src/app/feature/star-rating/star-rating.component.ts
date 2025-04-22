import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}