import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bike-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bike-search.component.html',
  styleUrl: './bike-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeSearchComponent implements OnInit {
  form = new FormGroup({ query: new FormControl('') });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: queryParams => {
        this.form.controls.query.patchValue(queryParams['query']);
      }
    });
  }

  submitQuery() {
    const query = this.form.value.query;
    const queryParams = query && query.length > 0 ? { query } : {};
    this.router.navigate(['/'], {
      queryParams
    });
  }
}
