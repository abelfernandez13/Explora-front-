import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Card } from './models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/photos';

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(card: Omit<Card, 'id'>): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, card);
  }
}
