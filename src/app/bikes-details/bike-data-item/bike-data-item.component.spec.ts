import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDataItemComponent } from './bike-data-item.component';

describe('BikeDataItemComponent', () => {
  let component: BikeDataItemComponent;
  let fixture: ComponentFixture<BikeDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeDataItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
