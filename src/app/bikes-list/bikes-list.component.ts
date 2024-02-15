import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { BikesService } from '../services/bikes/bikes.service';
import { Bike } from '../services/bikes/bikes.typings';
import { ViewHeaderComponent } from '../components/view-header/view-header.component';
import { BikeCardComponent } from './bike-card/bike-card.component';

@Component({
  selector: 'app-bikes-list',
  standalone: true,
  imports: [ViewHeaderComponent, BikeCardComponent],
  templateUrl: './bikes-list.component.html'
})
export class BikesListComponent implements OnInit {
  loading = true;
  bikes: Bike[] = [];

  constructor(
    private bikesService: BikesService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.getBikes();
  }

  private getBikes() {
    this.bikesService
      .getBikes()
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef) // operator in dev preview, too tempting to not to give it a go in a pet project
      )
      .subscribe({
        next: bikes => {
          this.bikes = bikes;
        },
        error: error => {
          this.bikes = [];
          console.error(JSON.stringify(error));
        }
      });
  }
}
