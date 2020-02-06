import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dragon } from '../shared/models/dragon.model';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private http: HttpClient) { }

  public getDragons(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>('/api/v1/dragon');
  }

  public getDragon(id: string) {
    return this.http.get<Dragon>(`/api/v1/dragon/${id}`);
  }

  public createDragon(dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>('/api/v1/dragon', dragon);
  }

  public updateDragon(id: string, dragon: Dragon): Observable<Dragon> {
    return this.http.put<Dragon>(`/api/v1/dragon/${id}`, dragon);
  }

  public deleteDragon(id: string): Observable<Dragon> {
    return this.http.delete<Dragon>(`/api/v1/dragon/${id}`);
  }
}
