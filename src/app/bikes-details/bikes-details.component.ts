import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { BikesService } from '../services/bikes/bikes.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ViewHeaderComponent } from '../components/view-header/view-header.component';
import { Bike } from '../services/bikes/bikes.typings';
import { BikeDataItemComponent } from './bike-data-item/bike-data-item.component';

@Component({
  selector: 'app-bikes-details',
  standalone: true,
  imports: [ViewHeaderComponent, BikeDataItemComponent],
  templateUrl: './bikes-details.component.html'
})
export class BikesDetailsComponent implements OnInit {
  loading = true;
  bike!: Bike;

  @Input() id!: number;

  constructor(
    private bikesService: BikesService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.bikesService
      .getBike(this.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: bike => {
          this.bike = bike;
        },
        error: () => {
          //do smt
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
