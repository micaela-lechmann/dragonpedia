import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '../shared/models/user.model';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should store username and return true if user credentials are right', () => {
      const rightUser: User = {
        username: 'daenerys@drogon.com',
        password: 'dracarys'
      };

      const isLogged = service.login(rightUser);

      expect(isLogged).toBeTruthy();
      expect(localStorage.getItem('loggedUser')).toBe(rightUser.username);

      service.logout();
    });

    it('should not store username and return false if user credentials are wrong', () => {
      const wrongUser: User = {
        username: 'daenerys@dragon.com',
        password: 'dracaris'
      };

      const isLogged = service.login(wrongUser);

      expect(isLogged).toBeFalsy();
      expect(localStorage.getItem('loggedUser')).toBe(null);
    });
  });

  describe('logout', () => {
    it('should remove loggedUser item from localStorage', () => {
      localStorage.setItem('loggedUser', 'test user');
      service.logout();

      expect(localStorage.getItem('loggedUser')).toBe(null);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if loggedUser item exists', () => {
      localStorage.setItem('loggedUser', 'test user');

      expect(service.isAutenticated()).toBeTruthy();
      localStorage.removeItem('loggedUser');
    });

    it('should return true if loggedUser item exists', () => {
      expect(service.isAutenticated()).toBeFalsy();
    });
  });
});
