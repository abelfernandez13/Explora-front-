import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  templateUrl: './step.html',
  styleUrls: ['./step.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step {
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
}
