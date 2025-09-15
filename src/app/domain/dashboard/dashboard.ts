import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsStore } from '../cards/cards-store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  private readonly cardsStore = inject(CardsStore);
  readonly step = signal(1);
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;

  formData = {
    title: '',
    description: '',
  };

  title = '';
  description = '';

  openDialog() {
    this.dialogRef.nativeElement.showModal();
  }

  closeDialog() {
    this.dialogRef.nativeElement.close();
  }

  goToStep2(event: Event) {
    event.preventDefault();
    if (this.title.trim() && this.description.trim()) {
      this.step.set(2);
    }
  }

  saveCard() {
    this.cardsStore.addCard({
      title: this.title,
      description: this.description,
      price: 0,
      imagePath: '',
      rooms: 0,
    });

    this.closeDialog();
    this.resetForm();
  }

  private resetForm() {
    this.title = '';
    this.description = '';
    this.step.set(1);
  }
}
