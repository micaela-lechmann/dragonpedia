import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(AuthGuardService);
    authService = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return value according to authService isAuthenticated response', () => {
      const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
      const state: RouterStateSnapshot = {} as RouterStateSnapshot;
      spyOn(authService, 'isAutenticated').and.returnValue(true);

      expect(service.canActivate(route, state)).toBeTruthy();
    });
  });
});
