import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Card } from './models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/card';

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(body: Omit<Card, 'id'> | FormData): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, body);
  }
}
