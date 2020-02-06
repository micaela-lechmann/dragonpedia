import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DragonService } from './dragon.service';
import { Dragon } from '../shared/models/dragon.model';

fdescribe('DragonService', () => {
  let service: DragonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(DragonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDragons', () => {
    it('should call url with get method', () => {
      service.getDragons().subscribe();
      
      const req = httpMock.expectOne('/api/v1/dragon');
      expect(req.request.method).toBe('GET');
    });
  });

  describe('getDragon', () => {
    it('should call url with get method and correct id', () => {
      service.getDragon('1').subscribe();
      
      const req = httpMock.expectOne('/api/v1/dragon/1');
      expect(req.request.method).toBe('GET');
    });
  });

  describe('createDragon', () => {
    it('should call url with post method and correct body', () => {
      const dragon: Dragon = {
        createdAt: new Date(),
        histories: [],
        name: 'Dragon',
        type: 'Fire'
      };

      service.createDragon(dragon).subscribe();
      
      const req = httpMock.expectOne('/api/v1/dragon');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toBe(dragon);
    });
  });

  describe('updateDragon', () => {
    it('should call url with put method and correct body and id', () => {
      const dragon: Dragon = {
        createdAt: new Date(),
        histories: [],
        id: '1',
        name: 'Dragon',
        type: 'Ice'
      };

      service.updateDragon('1', dragon).subscribe();
      
      const req = httpMock.expectOne('/api/v1/dragon/1');
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBe(dragon);
    });
  });

  describe('updateDragon', () => {
    it('should call url with put method and correct body and id', () => {
      const dragon: Dragon = {
        createdAt: new Date(),
        histories: [],
        id: '1',
        name: 'Dragon',
        type: 'Ice'
      };

      service.updateDragon('1', dragon).subscribe();
      
      const req = httpMock.expectOne('/api/v1/dragon/1');
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBe(dragon);
    });
  });

  describe('deleteDragon', () => {
    it('should call url with delete method and correct id', () => {
      service.deleteDragon('1').subscribe();
      
      const req = httpMock.expectOne('/api/v1/dragon/1');
      expect(req.request.method).toBe('DELETE');
    });
  });
});
