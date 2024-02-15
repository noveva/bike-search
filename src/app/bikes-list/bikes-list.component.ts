import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BikesService } from '../services/bikes/bikes.service';
import { Bike } from '../services/bikes/bikes.typings';

@Component({
  selector: 'app-bikes-list',
  standalone: true,
  imports: [],
  templateUrl: './bikes-list.component.html',
  styleUrl: './bikes-list.component.scss'
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
      .pipe(takeUntilDestroyed(this.destroyRef)) // operator in dev preview, too tempting to not to give it a go in a pet project
      .subscribe({
        next: bikes => {
          this.bikes = bikes;
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
