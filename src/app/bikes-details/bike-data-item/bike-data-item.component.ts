import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-data-item',
  standalone: true,
  imports: [],
  templateUrl: './bike-data-item.component.html'
})
export class BikeDataItemComponent {
  @Input() label!: string;
}
