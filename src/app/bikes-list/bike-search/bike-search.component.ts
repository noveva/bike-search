import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bike-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './bike-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeSearchComponent implements OnInit {
  public form = new FormGroup({ query: new FormControl('') });
  public formDisabled: boolean = false;

  @Input() set disabled(disabledValue: boolean) {
    this.formDisabled = disabledValue;
    if (disabledValue) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  @ViewChild('input') input!: ElementRef;

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

  public reset() {
    this.form.controls.query.reset();
    this.input.nativeElement.focus();
  }

  public submitQuery() {
    const query = this.form.value.query;
    const queryParams = query && query.length > 0 ? { query } : {};
    this.router.navigate(['/'], {
      queryParams
    });
  }
}
