import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GameDTO } from '../models/GameDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GameService extends ApiService {
  private readonly API_PATH = '/api/goty';

  constructor(protected http: HttpClient) {
    super(http);
  }

  // GET GOTY //
  public getGoty(): Observable<GameDTO[]> {
    return this.http.get(`${this.baseUrl}${this.API_PATH}`).pipe(
      map((response) => {
        return response as GameDTO[];
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
