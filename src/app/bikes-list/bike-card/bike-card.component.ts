import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [],
  templateUrl: './bike-card.component.html',
  styleUrl: './bike-card.component.scss'
})
export class BikeCardComponent {
  thumbFallback = '/assets/bike_placeholder.svg';
  @Input() id!: number;
  @Input() title!: string;
  @Input() thumb!: string;
}
