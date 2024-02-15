import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { BikesService } from './bikes.service';

describe('BikesService', () => {
  let service: BikesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BikesService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
