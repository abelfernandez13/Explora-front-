import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  templateUrl: './image-uploader.html',
  styleUrls: ['./image-uploader.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageUploader {
  // Inputs
  readonly files = input<File[]>([]);
  readonly previews = input<string[]>([]);
  readonly max = input<number>(10);
  readonly disabled = input<boolean>(false);

  // Outputs
  readonly addFiles = output<File[]>();
  readonly removeAt = output<number>();

  // Local UI state
  readonly isDragging = signal(false);
  readonly countText = computed(() => `${this.files().length} / ${this.max()}`);
  readonly overLimit = computed(() => this.files().length > this.max());

  onBrowseClick(input: HTMLInputElement) {
    if (this.disabled()) return;
    input.click();
  }

  onFileChange(event: Event) {
    if (this.disabled()) return;
    const inputEl = event.target as HTMLInputElement;
    const files = Array.from(inputEl.files ?? []);
    const images = files.filter((f) => f.type.startsWith('image/'));
    if (images.length) this.addFiles.emit(images);
    // reset to allow re-selecting same files
    inputEl.value = '';
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (this.disabled()) return;
    this.isDragging.set(true);
  }

  onDragLeave() {
    if (this.disabled()) return;
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (this.disabled()) return;
    this.isDragging.set(false);
    const files = Array.from(event.dataTransfer?.files ?? []);
    const images = files.filter((f) => f.type.startsWith('image/'));
    if (images.length) this.addFiles.emit(images);
  }

  onRemove(index: number) {
    if (this.disabled()) return;
    this.removeAt.emit(index);
  }
}
