import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { AddCardComponent } from '../cards/add-card/add-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, AddCardComponent],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  @ViewChild('addCardRef') addCardRef!: AddCardComponent;
  protected readonly mobileOpen = signal(false);

  onAddCard() {
    this.addCardRef?.open();
  }

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}
