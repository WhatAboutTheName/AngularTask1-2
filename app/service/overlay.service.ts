import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CloseOverlayRef } from './closeOverlayRef'
import { TabeComponent } from '../tabe/tabe.component';

interface Config {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: Config = {
  hasBackdrop: true,
  panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable()
export class OverlayService {

  constructor(private overlay: Overlay) { }

  open(config: Config = {}) {

    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new CloseOverlayRef(overlayRef);

    const filePreviewTabeComponent = new ComponentPortal(TabeComponent);

    overlayRef.attach(filePreviewTabeComponent);
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());
    
    return dialogRef;
  }

  private createOverlay(config: Config) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: Config): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      positionStrategy
    });

    return overlayConfig;
  }
}