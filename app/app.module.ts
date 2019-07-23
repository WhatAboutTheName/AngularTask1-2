import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabeComponent } from './tabe/tabe.component';

import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';

import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { StartPageComponent } from './start-page/start-page.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

import { OverlayService } from './service/overlay.service';



@NgModule({
  declarations: [
    AppComponent,
    TabeComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    OverlayModule,
    CommonModule
  ],
  entryComponents: [
    TabeComponent
  ],
  providers: [
    OverlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

