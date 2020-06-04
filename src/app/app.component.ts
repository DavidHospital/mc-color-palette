import { Component } from '@angular/core';
import { McTextureService } from './services/mc-texture/mc-texture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mc-color-palette';

  _assets: any;

  constructor(
      private _mcTextureService: McTextureService,
  ) {
    this._mcTextureService.generateColors();
    this._assets = this._mcTextureService.assets;
  }
  
}
