import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesDetailsComponent } from './bikes-details.component';
import { BikesService } from '../services/bikes/bikes.service';
import { of } from 'rxjs';

describe('BikesDetailsComponent', () => {
  let component: BikesDetailsComponent;
  let fixture: ComponentFixture<BikesDetailsComponent>;
  const BikeServiceStub = {
    getBike: () => of({ id: 1, title: 'Bike Test' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikesDetailsComponent],
      providers: [{ provide: BikesService, useValue: BikeServiceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(BikesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
