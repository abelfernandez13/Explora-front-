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
import { StepActions } from '../../../shared/components/step-actions/step-actions';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [ReactiveFormsModule, ImageUploader, Step, StepActions],
  templateUrl: './add-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCardComponent {
  private readonly cardsStore = inject(CardsStore);
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

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
  readonly mapUrl = signal<SafeResourceUrl | null>(null);

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
    if (this.images().length === 0) return; // require at least one image
    if (this.images().length > this.maxImages) return;
    this.step.set(3);
  }

  goToReview() {
    const { address } = this.form.controls;
    address.markAsTouched();
    if (address.valid) {
      const addr = address.value.trim();
      // Try to re-use the API key already loaded in index.html; fallback to non-key embed
      const script = document.querySelector(
        'script[src*="maps.googleapis.com/maps/api/js"]'
      ) as HTMLScriptElement | null;
      const key = script ? new URL(script.src).searchParams.get('key') : null;
      const url = key
        ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
            key
          )}&q=${encodeURIComponent(addr)}`
        : `https://www.google.com/maps?q=${encodeURIComponent(addr)}&output=embed`;
      this.mapUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
      this.step.set(4);
    }
  }

  back(to: 1 | 2 | 3) {
    this.step.set(to);
  }

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
    if (this.images().length === 0) return; // require at least one image
    const { title, description, price, rooms, address } = this.form.getRawValue();
    const images = this.images();

    this.cardsStore.addCard({ title, description, price, rooms, address }, images);
    this.close();
    this.reset();
  }

  private reset() {
    this.form.reset({ title: '', description: '', price: 0, rooms: 0, address: '' });
    this.imagePreviews().forEach((url) => URL.revokeObjectURL(url));
    this.images.set([]);
    this.imagePreviews.set([]);
    this.step.set(1);
    this.mapUrl.set(null);
  }
}
