import { OverlayRef } from '@angular/cdk/overlay';

export class CloseOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}