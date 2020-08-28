import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GameDTO } from '../models/GameDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GameService extends ApiService {
  private readonly API_PATH = '/api/goty';
  private games: GameDTO[] = [];

  constructor(protected http: HttpClient) {
    super(http);
  }

  // GET GOTY //
  public getGoty(): Observable<GameDTO[]> {
    // Controls if we had recover the data once at least
    if (this.games.length > 0) {
      // Return the games as an observable
      return of(this.games);
    } else {
      return this.http.get(`${this.baseUrl}${this.API_PATH}`).pipe(
        map((response: GameDTO[]) => {
          this.games = response;
          return this.games;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
    }
  }

  // VOTE AS GOTY //
  public voteAsGoty(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.API_PATH}/${id}`, {}).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
