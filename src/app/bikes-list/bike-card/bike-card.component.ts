import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bike-card.component.html',
  styleUrl: './bike-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeCardComponent {
  public thumbFallback = '/assets/bike_placeholder.svg';
  @Input() id!: number;
  @Input() title!: string;
  @Input() thumb!: string;
}
