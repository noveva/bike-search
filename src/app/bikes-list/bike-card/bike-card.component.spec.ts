import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BikeCardComponent } from './bike-card.component';

describe('BikeCardComponent', () => {
  let component: BikeCardComponent;
  let fixture: ComponentFixture<BikeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeCardComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ id: 1 }])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
