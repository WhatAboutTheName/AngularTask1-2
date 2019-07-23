import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../service/overlay.service';
import { CloseOverlayRef } from '../service/closeOverlayRef'

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})

export class StartPageComponent implements OnInit {
  
  constructor(private overlayService: OverlayService) { };

  ngOnInit() {
  }

  showTable() {
    let dialogRef: CloseOverlayRef = this.overlayService.open();
  }

  closeTable(){
    
  }
}