import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesListComponent } from './bikes-list.component';
import { BikesService } from '../services/bikes/bikes.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('BikesListComponent', () => {
  let component: BikesListComponent;
  let fixture: ComponentFixture<BikesListComponent>;

  beforeEach(async () => {
    const BikeServiceStub = {
      getBikes: () => of([])
    };
    const ActivatedRouteStub = {
      queryParams: of([{ id: 1 }])
    };

    await TestBed.configureTestingModule({
      imports: [BikesListComponent],
      providers: [
        { provide: BikesService, useValue: BikeServiceStub },
        {
          provide: ActivatedRoute,
          useValue: ActivatedRouteStub
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BikesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
