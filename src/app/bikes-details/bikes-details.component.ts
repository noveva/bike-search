import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { BikesService } from '../services/bikes/bikes.service';
import { Bike } from '../services/bikes/bikes.typings';
import { ViewHeaderComponent } from '../components/view-header/view-header.component';
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
    private destroyRef: DestroyRef,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.bikesService
      .getBike(this.id)
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: bike => {
          this.bike = bike;
        },
        error: error => {
          console.error(JSON.stringify(error));
        }
      });
  }

  goBack() {
    this.location.back();
  }
}
