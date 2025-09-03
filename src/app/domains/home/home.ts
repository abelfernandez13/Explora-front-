import { Component } from '@angular/core';
import { ExampleCard } from '../../shared/components/example-card/example-card';

@Component({
  selector: 'app-home',
  imports: [ExampleCard],
  templateUrl: './home.html',
})
export class Home {
  adminCards = [{
    
  }];
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
