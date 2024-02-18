import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSearchComponent } from './bike-search.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BikeSearchComponent', () => {
  let component: BikeSearchComponent;
  let fixture: ComponentFixture<BikeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeSearchComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of([{ id: 1 }])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
