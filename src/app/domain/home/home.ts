import { CardsStore } from './../cards/cards-store';
import { Component, inject, OnInit } from '@angular/core';
import { ExampleCard } from '../../shared/components/example-card/example-card';
import { Cards } from "../cards/cards";

@Component({
  selector: 'app-home',
  imports: [ExampleCard, Cards],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  readonly cardsStore = inject(CardsStore);

  ngOnInit(): void {
    this.cardsStore.loadCards();
  }

  examples = [
    {
      title: 'Example 1',
      imageUrl: 'https://placehold.co/450',
      description: 'Description for example 1',
    },
    {
      title: 'Example 2',
      imageUrl: 'https://placehold.co/450',
      description: 'Description for example 2',
    },
    {
      title: 'Example 3',
      imageUrl: 'https://placehold.co/450',
      description: 'Description for example 3',
    },
  ];
}
