import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { McTextureService } from './services/mc-texture/mc-texture.service';
import { McTexture } from './types/mc-texture';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  formGroup = new FormGroup({
    block: new FormControl('')
  });
  mcTexture: McTexture;

  constructor(
      private _mcTextureService: McTextureService,
      private _changeDetectorRef: ChangeDetectorRef,
  ) {
    
  }
  
}
