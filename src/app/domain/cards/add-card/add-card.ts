import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
  computed,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardsStore } from '../cards-store';
import { ImageUploader } from '../../../shared/components/image-uploader/image-uploader';
import { Step } from '../../../shared/components/step/step';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [ReactiveFormsModule, ImageUploader, Step],
  templateUrl: './add-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCardComponent {
  private readonly cardsStore = inject(CardsStore);
  private readonly fb = inject(FormBuilder);

  readonly step = signal(1);
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: [0, [Validators.required, Validators.min(0)]],
    rooms: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
  });

  readonly images = signal<File[]>([]);
  readonly imagePreviews = signal<string[]>([]);
  readonly maxImages = 10;
  readonly imagesCount = computed(() => this.images().length);

  open() {
    this.dialogRef?.nativeElement.showModal();
  }

  close() {
    this.dialogRef?.nativeElement.close();
  }

  goToStep2(event: Event) {
    event.preventDefault();
    const controls = this.form.controls;
    controls.title.markAsTouched();
    controls.description.markAsTouched();
    controls.price.markAsTouched();
    controls.rooms.markAsTouched();
    if (
      controls.title.valid &&
      controls.description.valid &&
      controls.price.valid &&
      controls.rooms.valid
    ) {
      this.step.set(2);
    }
  }

  goToStep3() {
    if (this.images().length > this.maxImages) return;
    this.step.set(3);
  }

  goToReview() {
    const { address } = this.form.controls;
    address.markAsTouched();
    if (address.valid) this.step.set(4);
  }

  back(to: 1 | 2 | 3) {
    this.step.set(to);
  }

  // Image handlers
  onAddFiles(files: File[]) {
    if (!files?.length) return;
    const current = this.images();
    const remainingSlots = this.maxImages - current.length;
    const accepted = files
      .slice(0, Math.max(0, remainingSlots))
      .filter((f) => f.type.startsWith('image/'));
    if (!accepted.length) return;
    this.images.set([...current, ...accepted]);
    this.refreshPreviews();
  }

  onRemoveAt(index: number) {
    const next = this.images().filter((_, i) => i !== index);
    this.images.set(next);
    this.refreshPreviews();
  }

  private refreshPreviews() {
    this.imagePreviews().forEach((url) => URL.revokeObjectURL(url));
    const urls = this.images().map((f) => URL.createObjectURL(f));
    this.imagePreviews.set(urls);
  }

  save() {
    if (!this.form.valid) return;
    const { title, description, price, rooms, address } = this.form.getRawValue();
    const firstPreview = this.imagePreviews()[0] ?? '';
    this.cardsStore.addCard({ title, description, price, rooms, address, imagePath: firstPreview });
    this.close();
    this.reset();
  }

  private reset() {
    this.form.reset({ title: '', description: '', price: 0, rooms: 0, address: '' });
    this.imagePreviews().forEach((url) => URL.revokeObjectURL(url));
    this.images.set([]);
    this.imagePreviews.set([]);
    this.step.set(1);
  }
}
