import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly testUser: User = {
    username: 'daenerys',
    password: 'dracarys',
    id: '1'
  }

  constructor() { }

  public isAutenticated(): boolean {
    return !!localStorage.getItem('loggedUser');
  }

  public login(user: User): boolean {
    if (user.password === this.testUser.password && user.username === this.testUser.username) {
      localStorage.setItem('loggedUser', user.username);
      return true;
    } else {
      return false;
    }
  }

  public logout(): void {
    localStorage.removeItem('loggedUser')
  }
}
