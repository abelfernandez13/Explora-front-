import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-card',
  imports: [],
  templateUrl: './example-card.html',
  styleUrl: './example-card.css',
})
export class ExampleCard {
  @Input({ required: true })
  title: string = '';
  @Input({ required: true })
  imageUrl: string = '';
  @Input({ required: true })
  description: string = '';
}
