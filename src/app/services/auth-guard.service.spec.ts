import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';


describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });

    service = TestBed.get(AuthGuardService);
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return an urlTree if service is not authenticated', () => {
      const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
      const state: RouterStateSnapshot = {} as RouterStateSnapshot;
      const urlTree: UrlTree = router.parseUrl('/login');
      spyOn(authService, 'isAutenticated').and.returnValue(false);

      expect(service.canActivate(route, state)).toEqual(urlTree);
    });

    it('should return true if service is authenticated', () => {
      const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
      const state: RouterStateSnapshot = {} as RouterStateSnapshot;
      spyOn(authService, 'isAutenticated').and.returnValue(true);

      expect(service.canActivate(route, state)).toBeTruthy();
    });
  });
});
