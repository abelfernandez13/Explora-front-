import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-step-actions',
  standalone: true,
  templateUrl: './step-actions.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'step-actions': '' },
})
export class StepActions {
  readonly showBack = input<boolean>(true);
  readonly showNext = input<boolean>(true);

  readonly backLabel = input<string>('Atrás');
  readonly nextLabel = input<string>('Siguiente');

  readonly backType = input<'button' | 'submit'>('button');
  readonly nextType = input<'button' | 'submit'>('button');

  readonly backDisabled = input<boolean>(false);
  readonly nextDisabled = input<boolean>(false);

  readonly nextVariant = input<'primary' | 'success'>('primary');

  @Output() back = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  nextBtnClass(): string {
    const base =
      'px-5 py-2 text-white font-medium rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-1 transition disabled:opacity-50 disabled:cursor-not-allowed';
    const variant = this.nextVariant();
    if (variant === 'success') {
      return `bg-green-600 hover:bg-green-700 focus:ring-green-500 ${base}`;
    }
    return `bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 ${base}`;
  }
}
