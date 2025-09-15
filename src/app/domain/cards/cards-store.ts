import { inject, Injectable, signal } from '@angular/core';
import { CardsApi } from './cards-api';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root',
})
export class CardsStore {
  private readonly api = inject(CardsApi);

  private readonly _cards = signal<Card[]>([]);
  readonly cards = this._cards.asReadonly();

  private readonly _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  loadCards(): void {
    this._loading.set(true);
    this.api.getCards().subscribe({
      next: (data) => this._cards.set(data),
      error: () => this._cards.set([]),
      complete: () => this._loading.set(false),
    });
  }

  addCard(card: Omit<Card, 'id'>): void {
    this._loading.set(true);
    this.api.addCard(card).subscribe({
      next: (data) => this._cards.update((cards) => [...cards, data]),
      error: () => this._cards.set([]),
      complete: () => this._loading.set(false),
    });
  }
}
