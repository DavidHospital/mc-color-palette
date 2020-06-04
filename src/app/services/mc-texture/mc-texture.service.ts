import { Injectable } from '@angular/core';

import Vibrant = require('node-vibrant');

@Injectable({
  providedIn: 'root'
})
export class McTextureService {

  private _assets = [];
  get assets() {
    return this._assets;
  }

  generateColors() {
    Vibrant.from('./assets/mc-textures/brain_coral_block.png').getPalette((err, palette) => {
      console.log(palette);
      this._assets.push(palette);
    });
  }
}
