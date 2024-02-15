import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bike-card.component.html',
  styleUrl: './bike-card.component.scss'
})
export class BikeCardComponent {
  thumbFallback = '/assets/bike_placeholder.svg';
  @Input() id!: number;
  @Input() title!: string;
  @Input() thumb!: string;
}
